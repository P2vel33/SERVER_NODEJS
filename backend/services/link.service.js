const db = require('../db')

class LinkService{
    showLink(){
        return db.query(`select * from links`)
    }

    createLink(){
        return db.query(`insert into links values (default, $1, $2, $3, $4) returning *`,
            [id_device_from, id_device_to, port_device_from, port_device_to])
    }

    updateLink(id, meaning){
        return db.query(`update links set id_device_from = $2 where id = $1 returning *`,[id,  meaning])
    }

    deleteLink(id){
        return db.query(`delete from links where id = $1 returning *`,[id])
    }


}

module.exports = new LinkService()