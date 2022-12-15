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
      pizza.belongsTo(models.ingredients, {
        foreignKey: "name"
      });
    }
  }
  pizza.init({
    id_pizza: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    
    ingredient_1: {
      type:DataTypes.STRING,
      allowNull: false,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_2: {
      type:DataTypes.STRING,
      allowNull: false,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_3: {
      type:DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_4: {
      type:DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    }
    
  }, {
    sequelize,
    modelName: 'pizza',
    timestamps: false
  });
  return pizza;
};