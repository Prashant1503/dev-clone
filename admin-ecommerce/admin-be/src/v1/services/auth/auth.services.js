const Admin = require('../../../../models/').Admin;
const path = require('path');

const { comparePassword, generateToken } = require('../../middleware/common');
/** @function : register user */

exports.register = async (auth) => {

    let { name, email, password } = auth;

    return new Promise(async (resolve, reject) => {

        // check if admin record exists or not,otherwise return msg
        let admin = await Admin.findOne({ where: { email } });

        if (admin) {
            return reject("Email is already in use");
        }

        try {
            await Admin.create({

                name,
                email,
                password

            })
                .then((user) => {

                    resolve(user);
                })
                .catch(err => {
                    reject(err);
                })

        } catch (e) {
            reject(e);
        }

    });

}

/** @function : sign in user */
exports.signIn = async (authObj) => {

    let { email, password } = authObj;

    return new Promise(async (resolve, reject) => {

        let admin = await Admin.findOne({ where: { email } });

        if (!admin) {
            return reject("Email doesn't exists");
        }

        try {

            let storedPassword = admin.password;
            /** Compare password */
            await comparePassword(storedPassword, password)
                .then(async (result) => {

                    /** Generate token */
                    let id = admin.id;

                    let token = await generateToken(id);
                    resolve(token);

                })
                .catch(err => {
                    reject(err);
                });



            /** return user information */

            resolve(admin);

        } catch (e) {
            reject(e);
        }
    });
}