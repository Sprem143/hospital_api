const express = require('express');
const app = express();
// define on which port your website run
const port = 8000;
// import database
const db = require('./config/mongoose.js')
//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy.js')

app.use(express.urlencoded({ extended: true }))
// set passport
app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))
// port config.
app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})