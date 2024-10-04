const db = require("../db")
const YAML = require('json-to-pretty-yaml');
const { createDevice, showDevices, showOneDevices, updateDevices, deleteDevices } = require("../services/device.service");


class DeviceController{
    // async createDevice(req,res){
    //     const {address, netmask, next_id, type, name} = req.body
    //     const newDevice = await db.query(`insert into device values (default, $1, $2, $3, $4, $5) returning *`,
    //                                     [address, netmask, next_id, type, name]);
    //     return res.json(newDevice.rows) 
        
    // };

    async createDevice(req,res){
        const { type }  = req.body
        const newDevice = await createDevice(type)
        return res.status(201).send(YAML.stringify(newDevice.rows))

    };

    async getDevice(req,res){
        const devices = await showDevices()
        return res.status(200).send(YAML.stringify(devices.rows))
    };

    // async getDevice(req,res){
    //     const devices = await db.query(`select * from device`)
    //     return res.status(200).json(devices.rows)
    // };

    async getOneDevice(req,res){
        const id = req.params.id
        const device = await showOneDevices(id)
        return res.status(200).send(YAML.stringify(device.rows))
    };

    async updateDevice(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const device = await updateDevices(id, meaning)
        return res.status(204).send(YAML.stringify(device.rows))
    };

    async deleteDevice(req,res){
        const id = req.params.id
        const device = await deleteDevices(id)
        return res.status(204).send(YAML.stringify(device.rows))
    };
}

module.exports = new DeviceController()