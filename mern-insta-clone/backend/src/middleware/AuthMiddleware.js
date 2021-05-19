const jwt = require("jsonwebtoken");
const env = require("../constants/constants");
const User = require("../../models").User;

/** @module : verifying request for valide user */
exports.authenticateToken = async (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status().send({ msg: "No token provided in header" });
  }

  /** verifying token */
  try {
    await jwt.verify(token, env.jwtSecretKey, (err, payload) => {
      if (err) {
        return res.status(env.UNAUTHORIZED).json({ err });
      }

      let { id } = payload;

      User.findByPk(id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          console.log(err);
          return res.status().json({ msg: "No user found!" });
        });
    });
  } catch (e) {
    return res.status(env.SERVER_ERR).send("Server err");
  }
};
