const Router = require('express')
const router = new Router()

const typeRouter = require('./typeRouter')
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')


router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)

module.exports = router