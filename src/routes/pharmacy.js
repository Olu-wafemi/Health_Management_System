const router = require('express').Router();

const controller = require('../controllers/pharmacy');
const isAuth =  require('../middleware/is-auth')


router.post('/acknowledge_patient', controller.acknowledge_patient)
router.get('/fetch_available_patients',controller.fetch_patients)
router.post('/fetch_patients_prescription', controller.fetch_patients_prescription)

//router.post('/send_to_doctor', controller.create_doctor_visit)
exports.pharmacyRouter = router