'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizza_ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      idPizza:{
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'pizzas',
          key: 'id'
        }
      },
      pizzeriaName:{
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model: 'pizzerias',
          key: 'name'
        }
      },
      ingredient: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pizza_ingredients');
  }
};