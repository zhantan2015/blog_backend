import express from 'express'
import root from './router/root'
import port from './common/port'

const app = express()

app.use('/',root)

app.listen(port, () => {
    console.log('App is running in http://localhost:3000')
})