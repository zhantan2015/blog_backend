import { MysqlError } from "mysql"
import connection from "../models"



export default function (sql: string, values?: any[]) {
    return new Promise<void>((resolve, rejects) => {
        sql = connection.format(sql, values!).replaceAll('?',`''`)

        connection.query(sql, (err: MysqlError, result: any) => {
            if (err) rejects(err)
            else resolve(result)
        })
    })
}