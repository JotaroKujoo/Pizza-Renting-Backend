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
      pizza.hasOne(models.pizzerias, {
        foreignKey: "name"
      })
    }
  }
  pizza.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    pizzeriaName:{
      type:DataTypes.STRING,
      allowNull: false,
      references :{
        model: "pizzerias",
        key: "name"
      }
    },
    description: DataTypes.STRING,
    imagen: DataTypes.STRING,
    
    
    
  }, {
    sequelize,
    modelName: 'pizza',
    timestamps: false
  });
  return pizza;
};