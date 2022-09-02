const router = require('express').Router();

const controller = require('../controllers/front_desk');



router.post('/register_patient', controller.registerpatient)
router.post('/searchpatient', controller.searchpatient)
router.post('/create_visit', controller.create_visit)
router
exports.frontdeskRouter = router