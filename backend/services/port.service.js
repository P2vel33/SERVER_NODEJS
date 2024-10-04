const db = require('../db')

class PortService{
    getPorts(){
        return db.query(`select * from port`)
    }

    createPort(type, name, status, id_device){
        return db.query(`insert into port values (default, $1, $2, $3, $4) returning *`,
            [type, name, status, id_device])
    }

    updatePort(id,  meaning){
        return db.query(`update port set id_device = $2 where id = $1 returning *`,[id,  meaning])
    }

    deletePort(id){
        return db.query(`delete from device where id = $1 returning *`,[id])
    }
}

module.exports = new PortService()