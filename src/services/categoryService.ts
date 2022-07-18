import { ApiRuselt, StatusCode } from "../common/apiResult"
import { createId } from "../common/hash"
import sqlQuery from "../common/sqlQuery"

export default class CategoryService {
    static async getCategory() {
        let apiResult = new ApiRuselt()
        let sql = `SELECT * FROM article_category`
        try {
            let res = await sqlQuery(sql)
            apiResult.code = StatusCode.success
            apiResult.message = '获取分类信息成功！'
            apiResult.data = res
            console.log(`${new Date().toLocaleString()}:${res}`)
        } catch (error) {
            apiResult.code = StatusCode.failed
            apiResult.message = '发生错误！'
            console.log(error)
        } finally {
            return apiResult
        }
    }

    static async createCategory(acname: string) {
        let apiResult = new ApiRuselt()
        if (!acname) {
            apiResult.code = StatusCode.failed
            apiResult.message = '参数错误！'
            return apiResult
        }
        try {
            let sql = `INSERT article_category(acid,acname) VALUES(?,?)`
            let resulte = await sqlQuery(sql, [createId(), acname])
            apiResult.code = StatusCode.success
            apiResult.message = '新建分类成功！'
            apiResult.data = resulte
            console.log(resulte)
        } catch (error) {
            apiResult.code = StatusCode.failed
            apiResult.message = '新建分类失败！'
            console.log(error)

        } finally {
            return apiResult
        }

    }
}