"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "createdBy" });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 20],
            msg: "Title should be in between [6-20] characters long",
          },
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 50],
            msg: "Description should be in between 6-50 characters long",
          },
          notEmpty: {
            msg: "Description cannot be empty",
          },
        },
      },
      images: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.STRING,
        references: "User",
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
