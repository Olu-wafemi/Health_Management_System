const router = require('express').Router();

const controller = require('../controllers/nurses');
const isAuth =  require('../middleware/is-auth')


router.post('/acknowledge_patient',isAuth, controller.acknowledge_patient)
router.get('/fetch_available_patients',controller.fetch_available_patients)
router.post('/record_patient_vitals',isAuth, controller.record_patient_vitals)
router.post('/send_to_doctor', isAuth,controller.create_doctor_visit)
exports.nurseRouter = router