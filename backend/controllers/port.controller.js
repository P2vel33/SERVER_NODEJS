const db = require('../db')
const YAML = require('json-to-pretty-yaml');
const { getPorts, createPort, updatePort, deletePort } = require('../services/port.service');

class PortController{
    async getPorts(req,res){
        const id_device = req.params.id;
        // const result = await db.query(`select * from port where id_device = $1`,[id_device])
        const result = await getPorts()
        return res.status(200).send(YAML.stringify(result.rows))
    }

    async createPort(req,res){
        const {type, name, status, id_device} = req.body
        const result = await createPort(type, name, status, id_device)
        return res.status(201).send(YAML.stringify(result.rows))
    }

    async updatePort(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const port = await updatePort(id, meaning)
        return res.status(204).send(YAML.stringify(port.rows))
    }

    async deletePort(req,res){
        const id = req.params.id
        const port = await deletePort(id)
        return res.status(204).send(YAML.stringify(port.rows))
    }

}

module.exports = new PortController()