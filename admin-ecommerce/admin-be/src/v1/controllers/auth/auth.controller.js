const {
    register,
    signIn
} = require('../../services/auth/auth.services');

const config = require('../../constants/constants');

module.exports = {

    registerUser: async (req, res) => {

        let auth = {};

        auth.name = req.body.name;
        auth.email = req.body.email;
        auth.password = req.body.password;

        try {

            await register(auth).
                then((user) => {
                    return res.status(config.OK).json({ msg: "User registered success", user });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(config.REQUEST_NOT_FOUND).json({ error: err });
                });

        } catch (e) {
            return res.send(e);
        }
    },

    loginUser: async (req, res) => {

        let authObj = {};

        authObj.email = req.body.email;
        authObj.password = req.body.password;

        await signIn(authObj)
            .then((token) => {
                return res.status(config.OK).json({ msg: "Signed in success", token });
            })
            .catch(err => {
                console.log(err);
                return res.status(config.REQUEST_NOT_FOUND).json({ err: err });
            });

    },

    resetPassword: () => { }
}