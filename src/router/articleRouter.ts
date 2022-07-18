import express from 'express'
import ArticleController from '../controller/articleController'

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
// router.post('/', ArticleController.postArticle)
router.get('/', ArticleController.getArticle)

export default router