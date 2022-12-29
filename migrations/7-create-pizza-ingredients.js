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
      },
      ingredient_5: {
        type: Sequelize.STRING,
        allowNull: true,
        references :{
          model: "ingredients",
          key: "name"
        }
      },
      ingredient_6: {
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
    await queryInterface.dropTable('pizza_ingredients');
  }
};