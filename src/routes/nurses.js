const router = require('express').Router();

const controller = require('../controllers/nurses');



router.post('/acknowledge_patient', controller.acknowledge_patient)
router.post('/fetch_available_patients', controller.fetch_available_patients)
router.post('/record_patient_vitals', controller.record_patient_vitals)

exports.nurseRouter = router