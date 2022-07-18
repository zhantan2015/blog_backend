import express from 'express'
import articleRouter from './articleRouter'
import authRouter from './authRouter'
import categoryRouter from './categoryRouter'
import rootRouter from './rootRouter'
import { AuthenticationRouter } from '../common/config'
import authentication from '../middlewares/authentication'


const router = express.Router()

router.all('*', (req, res, next) => {
    console.log(req.method)
    if (AuthenticationRouter[req.method].includes(req.path)) {
        authentication(req, res, next)
        return
    }
    next()
})

router.use('/', rootRouter)
// router.use('/sql', sql)
// router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/category', categoryRouter)
router.use('/article', articleRouter)


export default router;