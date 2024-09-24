const Rooter = require('express')
const router = Rooter()
const controllers = require('../controllers/port.controller')

router.get('/port',controllers.getPorts)
router.post('/port',controllers.createPort)
router.put('/port/:id',controllers.updatePort)
router.delete('/port/:id',controllers.deletePort)


module.exports = router
