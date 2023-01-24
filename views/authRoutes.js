const express = require('express');
const router = express.Router();

const {
    authLoginController,
    authRegisterController,
    authRegisterControllerAdmin
} = require("./../controllers/authController")

router.post('/login', authLoginController)
router.post('/register', authRegisterController)
router.post("registeradmin", authRegisterControllerAdmin)

module.exports = router;
