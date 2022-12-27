'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('pizzas', [
        {
        name: "Margarita",
        name_pizzeria: "Cheese Lovers",
        ingredient_1: "Tomate",
        ingredient_2: "Queso"
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('pizzas', null, {});
     
  }
};
