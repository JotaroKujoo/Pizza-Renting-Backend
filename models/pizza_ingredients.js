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
      pizza_ingredients.hasMany(models.ingredients);
      pizza_ingredients.belongsTo(models.pizzerias)
      
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
    name_pizzeria:{
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model: 'pizzerias',
        key: 'name'
      }
    },
    ingredient: {
      type: DataTypes.STRING,
      allowNull: true,
      references :{
        model: "ingredients",
        key: "name"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'pizza_ingredients',
    timestamps: false,
  });
  return pizza_ingredients;
};