"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostImages extends Model {
    static associate(models) {
      PostImages.belongsTo(models.Post, { foreignKey: "images" });
    }
  }
  PostImages.init(
    {
      secure_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      original_filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      format: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      public_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PostImages",
    }
  );
  return PostImages;
};
