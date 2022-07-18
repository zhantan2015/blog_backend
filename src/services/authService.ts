// import connection from "../models";
import Hash from '../common/hash'
import { ApiRuselt, StatusCode } from '../common/apiResult'
import config from '../common/config'
import sqlQuery from '../common/sqlQuery'

type Userinfo = {
    username?: string,
    password?: string,
    token?: string
}

export class Auth {
    userinfo: Userinfo
    key: string
    expired: string
    constructor(userinfo: Userinfo, timeout = 7) {
        this.userinfo = userinfo
        this.key = config.SECRET_KEY
        this.expired = (new Date().getTime() + timeout * 24 * 60 * 60 * 1000).toString()
    }

    async createAuth() {
        let result: any;
        let apiResult = new ApiRuselt()
        try {
            let sql = `SELECT * FROM users WHERE uname = ?`
            result = await sqlQuery(sql, [this.userinfo.username])
            console.log(result)
            if (result.length == 0) {
                apiResult.code = StatusCode.failed
                apiResult.message = '用户名或密码错误！'
                return apiResult
            } else {
                let password = this.userinfo.password as string;
                let sqlpassword = result[0].password;
                if (Hash.sha256(password) == sqlpassword) {
                    let token = this._createAuth()
                    apiResult.code = StatusCode.success
                    apiResult.data = { token }
                } else {
                    apiResult.code = StatusCode.failed
                    apiResult.message = '用户名或密码错误！'
                }
            }
        } catch (error) {
            apiResult.code = StatusCode.failed
            apiResult.data = error
            apiResult.message = '数据读取出错'
        } finally {
            return apiResult
        }
    }

    checkAuth() {
        let [header, body, footer] = [...this.userinfo.token!.split('·')]

        let apiResult = new ApiRuselt()

        let now = new Date().getTime()
        if (now > parseInt(footer)) {
            apiResult.code = StatusCode.failed
            apiResult.message = '会话超时'
        } else {
            let tkstr = header + this.key + footer
            if (Hash.sha256(tkstr) != body) {
                apiResult.code = StatusCode.failed
                apiResult.message = '权限错误'
            } else {
                apiResult.code = StatusCode.success
                apiResult.message = '登录成功！'
                apiResult.data = this._createAuth(this.userinfo.token)
            }
        }
        return apiResult

    }

    private _createAuth(token: string | null = null) {
        let header = token ? token.split('·')[0] : this.userinfo.username
        let footer = this.expired
        let tkstr = `${header}${this.key}${footer}`
        let body = Hash.sha256(tkstr)
        return `${header}·${body}·${footer}`
    }
}


export default class AuthService {
    static async createAuth(userinfo: Userinfo) {
        const auth = new Auth(userinfo);
        return await auth.createAuth()
    }
}