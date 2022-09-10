const router = require('express').Router();

const controller = require('../controllers/admin');



router.post('/register_admin', controller.registerAdmin)
router.post('/login_admin', controller.loginAdmin)

exports.adminRouter = router