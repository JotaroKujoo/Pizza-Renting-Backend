'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizzas', {
      id_pizza: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING
      },
      ingredient_1: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      },
      ingredient_2: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      },
      ingredient_3: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      },
      ingredient_4: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pizzas');
  }
};