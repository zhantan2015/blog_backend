import { Request, Response } from 'express'
import { ApiRuselt, StatusCode } from '../common/apiResult'
import { Auth } from '../services/authService'


export default function (req: Request, res: Response, next: Function) {
    let apiResult = new ApiRuselt()
    let token = req.headers['x-token']
    if (!token) {
        apiResult.code = StatusCode.failed
        apiResult.message = '权限错误!'
        return res.send(apiResult)
    } else {
        const auth = new Auth({ token: token as string })
        apiResult = auth.checkAuth()
        if (apiResult.code == StatusCode.failed)
            return res.send(apiResult)
        else
            next()
    }
}