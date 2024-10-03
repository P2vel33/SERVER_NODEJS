const db = require("../db")

class Services{
    createDevice(type){
        return db.query(`insert into device values (default, $1) returning *`,[ type ]);
    }

    showDevices(){
        return db.query(`select * from device`);
    }

    showOneDevices(id){
        return db.query(`select * from device where id = $1`,[id]);
    }

    updateDevices(id, meaning){
        return db.query(`update device set address = $2 where id = $1 returning *`,[id,  meaning])
    }

    deleteDevices(id){
        return db.query(`delete from device where id = $1 returning *`,[id])
    }
    
}

module.exports = new Services()