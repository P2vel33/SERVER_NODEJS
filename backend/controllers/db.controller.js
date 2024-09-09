const db = require("../db")
const YAML = require('yaml')


class Controllers{
    async createDevice(req,res){
        const {address, netmask, next_id, type, name} = req.body
        const newDevice = await db.query(`insert into device values (default, $1, $2, $3, $4, $5) returning *`,
                                        [address, netmask, next_id, type, name]);
        return res.json(newDevice.rows) 
        
    };

    async getDevice(req,res){
        const devices = await db.query(`select * from device`)
        return res.json(devices.rows)
    };

    async updateDevice(req,res){
        const id = req.params.id
        const { meaning } = req.body
        const device = await db.query(`update device set address = $2 where id = $1 returning *`,[id,  meaning])
        return res.json(device.rows) 
    };

    async deleteDevice(req,res){
        const id = req.params.id
        const device = await db.query(`delete from device where id = $1 returning *`,[id])
        return res.json(device.rows) 
    };
}

module.exports = new Controllers()