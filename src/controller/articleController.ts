import { Request, Response } from "express";
import ArticleService from "../services/articleService";

export default class ArticleController {
    static async getArticle(req: Request, res: Response) {
        let apiResult = await ArticleService.getArticle()
        res.send(apiResult)

    }
    static async postArticle(req: Request, res: Response) {
        let apiResult = await ArticleService.addArticle(req.body)
        res.send(apiResult)

    }

}