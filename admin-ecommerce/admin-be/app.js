const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const config = require('./src/v1/config/config');
const passport = require('./src/v1/config/passport.config');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}


// config
app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => { cb(null, user) });

passport.deserializeUser((obj, cb) => { cb(null, obj) });

// routes init
const authRoute = require('./src/v1/routes/auth/auth.route');

// routes 
// app.get('/api/v1/auth', authRoute);
app.post('/auth/google', passport.authenticate("google", { scope: ['profile'] }));

app.get('/api/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failed' }), (req, res, next) => {

    console.log(req.user);
    next();
});



// server
app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});




/** Export module */
module.exports = app;