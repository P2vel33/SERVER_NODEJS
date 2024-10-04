const db = require('../db')
const YAML = require('json-to-pretty-yaml');
const { showLink, createLink, updateLink, deleteLink } = require('../services/link.service');

class LinkController{
    
    async getLink(req,res){
        const link = await showLink()
        return res.status(200).send(YAML.stringify(link.rows))
    }

    async createLink(req,res){
        const {id_device_from, id_device_to, port_device_from, port_device_to} = req.body
        const result = await createLink()
        return res.status(201).send(YAML.stringify(result.rows))
    }

    async updateLink(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const link = await updateLink(id,meaning)
        return res.status(204).send(YAML.stringify(link.rows))
    }

    async deleteLink(req,res){
        const id = req.params.id
        const link = await deleteLink(id)
        return res.status(204).send(YAML.stringify(link.rows))
    }

}

module.exports = new LinkController()