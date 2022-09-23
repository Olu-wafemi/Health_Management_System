const router = require('express').Router();

const controller = require('../controllers/lab');
const isAuth =  require('../middleware/is-auth')


router.get('/fetch_patients',isAuth, controller.fetch_patients)
router.post('/acknowledge_patient',isAuth,controller.acknowledge_patient)
router.post('/create_test',isAuth, controller.create_pathology)
exports.labRouter = router
