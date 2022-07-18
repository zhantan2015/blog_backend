import express from 'express'
import mysql from '../models'

const router = express.Router();

router.get('/', (req, res) => {
    res.send(mysql.config);
})

export default router;