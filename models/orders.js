'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.user)
      orders.belongsTo(models.pizza)
    }
  }
  orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    pizzaId:{
      type: DataTypes.INTEGER,
      references: {
        model: "pizzas",
        key: "id"
      }
    },
    userId:{
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
    },
    extra:{
      type: DataTypes.STRING,
    },
    without:{
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    address: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'orders',
    timestamps: true
  });
  return orders;
};