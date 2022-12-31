'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pizzaId:{
        type: Sequelize.INTEGER,
        references: {
          model: "pizzas",
          key: "id"
        }
      },
      userId:{
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      extra:{
        type: Sequelize.STRING,
      },
      without:{
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};