import express from 'express'
import './models'

import root from './router/root'
import sql from './router/sql'

const app = express()
const port = 3333

app.use('/',root)
app.use('/sql',sql)

app.listen(port, () => {
    console.log(`App is running in http://localhost:${port}`)
})