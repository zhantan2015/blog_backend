import { assert } from 'console';
import express, { query } from 'express'
import { MysqlError, QueryOptions } from 'mysql';
import mysql from '../models'

const router = express.Router();

router.get('/', (req, res) => {

    let sql = req.query.sql as string;

    mysql.query(sql, (err: MysqlError, result: any) => {
        if (err) res.send(err)
        else res.send(result)
    })
})

export default router;