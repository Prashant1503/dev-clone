const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

/** @function : verifying password */
exports.comparePassword = async (storedPassword, password) => {

    /** comparing password */
    return new Promise(async (resolve, reject) => {

        await bcrypt.compare(
            storedPassword,
            password,
            (err, success) => {

                if (err) reject("Password is invalid");
                else resolve(success);
            });

    });
}

/** @function : generate token */
exports.generateToken = (id) => {

    return new Promise(async (resolve, reject) => {

        await jwt.sign(
            { id: id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.EXPIRATION_TIME }, (err, token) => {

                if (err) reject(err);
                else resolve(token);
            });
    });
}