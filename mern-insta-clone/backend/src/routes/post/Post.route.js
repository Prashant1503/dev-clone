const route = require("express").Router();
const { upload } = require("../../config/cloudinary.config");
const { authenticateToken } = require("../../middleware/AuthMiddleware");

/** controller */
const postController = require("../../controllers/post/Post.controller");

/**
 * @api : /add-new
 * @param : {title,description,image,tags}
 * @description : sign-in existing user
 */
route.get("/all", postController.fetchPosts);

/**
 * @api : /add-new
 * @param : {title,description,image,tags}
 * @description : sign-in existing user
 */
route.post(
  "/add-new",
  authenticateToken,
  upload.single("media"),
  postController.createPost
);

/** export route */
module.exports = route;
