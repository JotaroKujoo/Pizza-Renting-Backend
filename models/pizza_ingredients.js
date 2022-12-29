'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pizza_ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  pizza_ingredients.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
    },
    idPizza:{
      allowNull:false,
      type: DataTypes.INTEGER,
      references: {
        model: 'pizzas',
        key: 'id'
      }
    },
    ingredient_1: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_2: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_3: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_4: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_5: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    ingredient_6: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    }
  }, {
    sequelize,
    modelName: 'pizza_ingredients',
    timestamps: false,
  });
  return pizza_ingredients;
};