const router = require('express').Router();

const controller = require('../controllers/front_desk');
const isAuth =  require('../middleware/is-auth')


router.post('/register_patient', controller.registerpatient)
router.post('/searchpatient',isAuth, controller.searchpatient)
router.post('/create_visit',isAuth, controller.create_visit)
router.post('create-bill', isAuth,controller.createbill)
router.get('/all_patients', isAuth,controller.fetch_all_patients)
exports.frontdeskRouter = router