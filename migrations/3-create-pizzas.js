'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizzas', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
      },
      pizzeriaName:{
        type: Sequelize.STRING,
        allowNull: false,
        references :{
          model: "pizzerias",
          key: "name"
        }
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pizzas');
  }
};