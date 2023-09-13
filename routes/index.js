// import required file and framwork
const express = require('express');
const router = express.Router();
const passport = require('passport');
const status= require('../controllers/status.js')
// set url
router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports)
// export router
module.exports = router;