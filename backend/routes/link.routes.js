const Router = require('express')
const router = Router()
const controllers = require('../controllers/link.controller')

router.get('/links',controllers.getLink)
router.post('/links',controllers.createLink)
router.put('/links/:id',controllers.updateLink)
router.delete('/links/:id',controllers.deleteLink)


module.exports = router