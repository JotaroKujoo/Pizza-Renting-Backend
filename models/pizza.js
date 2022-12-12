'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pizza.init({
    id_pizza: DataTypes.INTEGER,
    name: DataTypes.STRING,
    ingredientes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'pizza',
  });
  return pizza;
};