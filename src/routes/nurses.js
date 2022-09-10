const router = require('express').Router();

const controller = require('../controllers/nurses');
const isAuth =  require('../middleware/is-auth')


router.post('/acknowledge_patient',isAuth, controller.acknowledge_patient)
router.post('/fetch_available_patients',isAuth, controller.fetch_available_patients)
router.post('/record_patient_vitals',isAuth, controller.record_patient_vitals)

exports.nurseRouter = router