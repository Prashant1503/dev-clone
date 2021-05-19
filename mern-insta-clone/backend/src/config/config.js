const dotenv = require('dotenv');
const path = require('path');

const { cloud } = require('../constants/constants');


dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});


// export 
module.exports = {

    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 4000
}

