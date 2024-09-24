const db = require('../db')
const YAML = require('json-to-pretty-yaml');

class Controllers{

    async getLink(req,res){
        const link = await db.query(`select * from links`)
        return res.status(200).send(YAML.stringify(link.rows))
    }

    async createLink(req,res){
        const {id_device_from, id_device_to, port_device_from, port_device_to} = req.body
        const result = await db.query(`insert into links values (default, $1, $2, $3, $4) returning *`,
                                        [id_device_from, id_device_to, port_device_from, port_device_to])
                                        return res.status(201).send(YAML.stringify(result.rows))
    }

    async updateLink(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const link = await db.query(`update links set id_device_from = $2 where id = $1 returning *`,[id,  meaning])
        return res.status(204).send(YAML.stringify(link.rows))
    }

    async deleteLink(req,res){
        const id = req.params.id
        const link = await db.query(`delete from links where id = $1 returning *`,[id])
        return res.status(204).send(YAML.stringify(link.rows))
    }

}

module.exports = new Controllers()