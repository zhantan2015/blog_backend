import express from 'express'
import root from './router/root'

const app = express()

app.use('/',root)

app.listen(3000, () => {
    console.log('App is running in http://localhost:3000')
})