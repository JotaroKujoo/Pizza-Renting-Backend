'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ingredients', {
      id : {
        unique: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ingredients');
  }
};