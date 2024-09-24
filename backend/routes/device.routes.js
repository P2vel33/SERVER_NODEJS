const Rooter = require('express')
const router = Rooter()
const controllers = require('../controllers/device.controller')

router.get("/device",controllers.getDevice)
router.get("/device/:id",controllers.getOneDevice)
router.post("/device",controllers.createDevice)
router.put("/device/:id",controllers.updateDevice)
router.delete("/device/:id",controllers.deleteDevice)


module.exports = router
