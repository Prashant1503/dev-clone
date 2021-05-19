"use strict";
const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here

      User.hasMany(models.Post, { foreignKey: "createdBy" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Name should be required",
          },
          notNull: {
            msg: "Name cannot be null",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: {
            msg: "Email should be required",
          },
          notNull: {
            msg: "Email cannot be null",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        is: [/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/],
        unique: true,
        validate: {
          len: {
            args: [6, 15],
            msg: "Password should be in between [6-15] characters long",
          },
          notEmpty: {
            msg: "Password should be required",
          },
          notNull: {
            msg: "Password cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    },
    {}
  );

  /** Generating hashed password  */
  User.beforeCreate(async (user, option) => {
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);

    return (user.password = hashedPassword);
  });

  /** Comparing password */
  User.prototype.validatePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
  };

  return User;
};
