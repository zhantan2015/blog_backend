import { createId } from "../common/hash"
import sqlQuery from "../common/sqlQuery"

export default class Article {

    aid: string
    title: string
    content: string
    acid: string
    tags?: string[]

    constructor(title: string, content: string, acid: string) {
        this.aid = createId()
        this.title = title
        this.content = content
        this.acid = acid
    }

    async setTags() {
        if (this.tags && this.tags.length > 0) {
            for (let i of this.tags) {
                let atid = await sqlQuery('SELECT atid FROM article_tags')
                console.log(atid)
            }
        }
    }

}