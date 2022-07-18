import { Request, Response } from "express";
import CategoryService from "../services/categoryService";

export default class CategoryController {
    static async postCategory(req: Request, res: Response) {
        let apiResult = await CategoryService.createCategory(req.body.acname)
        res.send(apiResult)
    }
    static async getCategory(req: Request, res: Response) {
        let apiResult = await CategoryService.getCategory()
        res.send(apiResult)
    }
}