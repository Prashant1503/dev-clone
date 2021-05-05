const express = require('express');
const morgan = require('morgan');
const app = express();

const config = require('./src/v1/config/config');



// config
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes init
const authRoute = require('./src/v1/routes/auth/auth.route');

// routes 
app.use('/api/v1/auth', authRoute);


// server
app.listen(config.PORT, config.HOST, function () {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});




/** Export module */
module.exports = app;