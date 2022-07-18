import { ApiRuselt, StatusCode } from "../common/apiResult";
import sqlQuery from "../common/sqlQuery";
import { createId } from "../common/hash"
import Zhash from "../common/hash";

export default class UserService {
    static async createUser(data: any) {
        const apiResult = new ApiRuselt()

        data.password = Zhash.sha256(data.password)

        try {
            let sql = 'INSERT users(uid,uname,password) VALUES(?,?,?)'
            let result = await sqlQuery(sql, [createId(), data.username, data.password])

            apiResult.code = StatusCode.success
            apiResult.data = result
        }
        catch (err) {
            apiResult.code = StatusCode.failed
            apiResult.data = err

        } finally {
            return apiResult
        }
    }
}