const User = require('../../../models').User;

const jwt = require('jsonwebtoken');
const constants = require('../../constants/constants');

/** @function : create new user */
module.exports = {

    createNewUser: (authObj) => {

        let { name, email, password } = authObj;

        return new Promise(async (resolve, reject) => {

            /** already user exists */
            let user = await User.findOne({ where: { email: email, name: name } });

            if (user) {
                return reject("Email is already in use..");
            }

            /** creating user */
            await User.create({

                "name": name,
                "email": email,
                "password": password

            })
                .then((user) => {

                    resolve(user);
                })

                .catch(err => {
                    reject(err);
                });

        });

    },

    signInUser: (email, password) => {

        return new Promise(async (resolve, reject) => {

            try {

                await User.findOne({
                    where: { email }
                })
                    .then(async (result) => {

                        let storedPassword = result.dataValues.password;
                        let isValidPassword = await result.validatePassword(password, storedPassword);

                        /** password is invalid */
                        if (!isValidPassword) {
                            reject("Password is invalid");
                        }

                        let payload = result.dataValues.id;

                        /** generating random token */
                        try {
                            await jwt.sign({ id: payload }, constants.jwtSecretKey, { expiresIn: constants.expirationTime }, (err, token) => {

                                if (err) reject(err);
                                else resolve(token);
                            });
                        } catch (tokenErr) {
                            reject(tokenErr);
                        }

                    })
                    .catch(err => {
                        reject(err);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }
}