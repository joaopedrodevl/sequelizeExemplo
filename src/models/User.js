const { Sequelize, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
          len: [2, 255]
        }
      },
      lastName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate: {
          notEmpty: true,
          isEmail: true
        }
      }
    }, {
      sequelize,
      tableName: 'users'
    });

    return this;
  }
}

module.exports = User;