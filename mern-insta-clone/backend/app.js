const express = require("express");
const config = require("./src/config/config");
const cors = require("cors");
const multer = require("multer");
const app = express();

/** configuration */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(cors());

/** route init */
const AuthRoute = require("./src/routes/auth/Auth.route");
const PostRoute = require("./src/routes/post/Post.route");

/** routes defination */
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/post", PostRoute);

/** Server part */
app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});
