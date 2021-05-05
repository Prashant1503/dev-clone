'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name must be required"
        },
        notEmpty: {
          msg: "Name cannot be empty"
        },
        len: {
          args: [6, 15],
          msg: "Name must be in between [6-15] characters"
        }

      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Email is invalid,try to correct"
        },
        notNull: {
          msg: "Name must be required"
        },
        notEmpty: {
          msg: "Name cannot be empty"
        }
      }

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name must be required"
        },
        notEmpty: {
          msg: "Name cannot be empty"
        },
        len: {
          args: [6, 12],
          msg: "Password should be in between [6-12] characters long"
        },

      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });

  Admin.beforeCreate(async (user, option) => {

    let hashedPassword = await bcrypt.hash(user.password, 8);

    return user.password = hashedPassword;
  })
  return Admin;
};