// import express
const express = require('express');
// set router
const router = express.Router();
// import doctor controller
const doctor = require('../controllers/doctorController.js')
// set url
router.post('/register',doctor.create)
router.post('/login',doctor.createSession)
// export router
module.exports = router;