import { Pool } from "pg";

const pool = new Pool({
    user : 'postgres',
    host : "localhost",
    database : "crud_db",
    password : "321",
    port : 5000
})

export default pool