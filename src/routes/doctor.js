const router = require('express').Router();

const controller = require('../controllers/doctors');
const isAuth =  require('../middleware/is-auth')


router.post('/acknowledge_patient',isAuth, controller.acknowledge_patient)
router.get('/fetch_available_patients',isAuth, controller.fetch_available_patients)
router.post('/get_patient_vitals', isAuth,controller.get_patient_vitals)
router.post('/send_to_pharmacy', isAuth,controller.send_to_pharmacy)
router.post('/administer_medicine',isAuth, controller.add_medication)
router.post('/send_to_lab', isAuth,controller.send_to_lab)
exports.doctorRouter  = router