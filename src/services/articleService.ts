import { ApiRuselt, StatusCode } from "../common/apiResult"
import sqlQuery from "../common/sqlQuery"

type ArticleInfo = {
    title: string,
    content: string,
    category?: string,
    tags?: string[]
}

export default class ArticleService {
    static async addArticle(articleInfo: ArticleInfo) {
        let apiResult = new ApiRuselt()
        let tags =articleInfo.tags


        return apiResult
    }

    static async getArticle() {
        let apiRuselt = new ApiRuselt()
        let sql = 'SELECT * FROM articles'
        try {
            let res = await sqlQuery(sql)
            apiRuselt.code = StatusCode.success
            apiRuselt.message = '获取所有文章成功！'
            apiRuselt.data = res
        } catch (error) {
            apiRuselt.code = StatusCode.failed
            apiRuselt.message = '出现错误！'
        } finally {
            return apiRuselt
        }

    }
}