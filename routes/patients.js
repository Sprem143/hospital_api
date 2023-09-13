// import required file and framwork
const express = require('express');
const router = express.Router();
const patient = require('../controllers/patientController.js')
const passport = require('passport');
// set router for different url
router.post('/register',passport.authenticate('jwt',{session:false}),patient.register)
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patient.createReport)
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patient.patientReports)
// export router
module.exports = router;