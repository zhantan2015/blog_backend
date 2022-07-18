import { Request, Response } from "express";
import userService from "../services/userService"

export default class userController {

    static async postUser(req: Request, res: Response) {
        let apiRuselt = await userService.createUser({
            username: req.body.username,
            password: req.body.password
        })
        res.send(apiRuselt)
    }

}