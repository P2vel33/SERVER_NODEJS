const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"afso_2020",
    host:"localhost",
    port:5432,
    database:"server"
})


module.exports = pool