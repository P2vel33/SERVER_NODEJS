const db = require('../db')
const YAML = require('json-to-pretty-yaml');

class Controllers{
    async getPorts(req,res){
        const id_device = req.params.id;
        // const result = await db.query(`select * from port where id_device = $1`,[id_device])
        const result = await db.query(`select * from port`)
        return res.status(200).send(YAML.stringify(result.rows))
    }

    async createPort(req,res){
        const {type, name, status, id_device} = req.body
        const result = await db.query(`insert into port values (default, $1, $2, $3, $4) returning *`,
                                        [type, name, status, id_device])
                                        return res.status(201).send(YAML.stringify(result.rows))
    }

    async updatePort(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const port = await db.query(`update port set id_device = $2 where id = $1 returning *`,[id,  meaning])
        return res.status(204).send(YAML.stringify(port.rows))
    }

    async deletePort(req,res){
        const id = req.params.id
        const port = await db.query(`delete from device where id = $1 returning *`,[id])
        return res.status(204).send(YAML.stringify(port.rows))
    }

}

module.exports = new Controllers()