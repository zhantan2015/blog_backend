import express from 'express'
import bodyParser from 'body-parser'
import './models'
import router from './router'
import { nextTick } from 'process'

const app = express()
const port = 3333


app.use(bodyParser.urlencoded({ extended: true }))
app.all('*', (req, res, next) => {
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers', '*');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', '*');
    next()
})
app.use('/', router)


app.listen(port, () => {
    console.log(`App is running in http://localhost:${port}`)
})