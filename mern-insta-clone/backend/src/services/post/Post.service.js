const User = require("../../../models").User;
const Post = require("../../../models").Post;

const { cloud } = require("../../constants/constants");
const { cloudinary } = require("../../config/cloudinary.config");

module.exports = {
  /** @function : new post */
  newPost: async (postObj) => {
    let { id, title, description, file } = postObj;

    /** */
    return new Promise(async (resolve, reject) => {
      let post = await Post.findOne({ where: { title } });

      if (post) {
        reject("Post already exists");
      }

      try {
        let result = await this.uploadMedia(file.path);

        await Post.create({
          title: title,
          description: description,
          images: result,
          createdBy: id,

          include: [
            {
              model: User,
              foreignKey: "createdBy",
            },
          ],
        })
          .then((result) => {
            if (!result) {
              reject("Post failed to save");
            }

            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  },

  getAllPost: () => {
    return new Promise(async (resolve, reject) => {
      await User.findAll({
        include: [
          {
            model: Post,
            attributes: ["id", "title", "description"],
          },
        ],
      })
        .then((posts) => {
          resolve(posts);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

/** @function : upload media i.e (image | images) */
exports.uploadMedia = (file) => {
  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader.upload(file, async (err, result) => {
      if (err) reject(err);
      else resolve(result.url);
    });
  });
};
