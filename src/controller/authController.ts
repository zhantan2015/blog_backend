import { Request, Response } from "express";
import AuthService from "../services/authService"

export default class AuthController {

    static async postAuth(req: Request, res: Response) {
        let userInfo = req.body
        const result = await AuthService.createAuth(userInfo)
        res.send(result)
    }

}