'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    second_last_name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    role_id: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    privileges: DataTypes.JSONB,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};