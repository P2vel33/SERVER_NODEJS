const Rooter = require('express')
const rooter = Rooter()
const controllers = require('../controllers/db.controller')


rooter.get("/device",controllers.getDevice)
rooter.post("/newDevice",controllers.createDevice)
rooter.put("/updevice/:id",controllers.updateDevice)
rooter.delete("/device/:id",controllers.deleteDevice)


module.exports = rooter
