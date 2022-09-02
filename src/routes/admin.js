const router = require('express').Router();

const controller = require('../controllers/admin');



router.post('/register_admin', controller.registerAdmin)


exports.adminRouter = router