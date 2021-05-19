const {
    createNewUser,
    signInUser
} = require('../../services/auth/Auth.service');

/** constsnts */
const statusCode = require('../../constants/constants');

module.exports = {

    /** @function : register user */
    registerUser: async (req, res) => {

        let authObj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        try {
            await createNewUser(authObj)
                .then((user) => {
                    return res.status(statusCode.OK).json({ user });

                })
                .catch(err => {
                    return res.status(statusCode.RESOURCE_ALREADY_EXISTS).json({ msg: err });
                });
        } catch (error) {
            console.error(error.message);
            return res.status(statusCode.SERVER_ERR).send(error.message);
        }
    },

    loginUser: async (req, res) => {

        let { email, password } = req.body;

        await signInUser(email, password)
            .then((token) => {
                return res.status(statusCode.OK).json({ token });
            })
            .catch(err => {
                return res.status(statusCode.RESOURCE_NOT_FOUND).json({ err });
            });
    }
}