// services
const { newPost, getAllPost } = require("../../services/post/Post.service");

const env = require("../../constants/constants");

module.exports = {
  /** @function : create new post */
  createPost: async (req, res) => {
    let postObj = {};

    postObj.id = req.user.id;
    postObj.title = req.body.title;
    postObj.description = req.body.description;
    postObj.file = req.file;

    try {
      await newPost(postObj)
        .then((result) => {
          return res.status(env.OK).json({ result });
        })
        .catch((err) => {
          console.log(err);
          return res.status(env.RESOURCE_NOT_FOUND).json({ err });
        });
    } catch (e) {
      return res.status(env.SERVER_ERR).send(e);
    }
  },

  fetchPosts: async (req, res) => {
    await getAllPost()
      .then((posts) => {
        return res.status(200).json({ posts });
      })
      .catch((err) => {
        return res.status(500).json({ err });
      });
  },
};
