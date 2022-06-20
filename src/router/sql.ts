import express from 'express'
import mysql from '../models'

const router = express.Router();

router.get('/', (req, res) => {

    let sql = req.query;

    res.send(sql)
})

export default router;