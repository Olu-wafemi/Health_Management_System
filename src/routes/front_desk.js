const router = require('express').Router();

const controller = require('../controllers/front_desk');
const isAuth =  require('../middleware/is-auth')


router.post('/register_patient', isAuth,controller.registerpatient)
router.post('/searchpatient',isAuth, controller.searchpatient)
router.post('/create_visit',isAuth, controller.create_visit)
router.post('create-bill', isAuth,controller.createbill)
exports.frontdeskRouter = router