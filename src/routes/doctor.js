const router = require('express').Router();

const controller = require('../controllers/doctors');
const isAuth =  require('../middleware/is-auth')


router.post('/acknowledge_patient', controller.acknowledge_patient)
router.get('/fetch_available_patients', controller.fetch_available_patients)
router.post('/get_patient_vitals', controller.get_patient_vitals)
router.post('/send_to_pharmacy', controller.send_to_pharmacy)
exports.doctorRouter  = router