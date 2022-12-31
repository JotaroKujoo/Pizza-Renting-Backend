'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('pizzas', [
        {
        id: 1,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
        },
        {
        id:2,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
        },
        {
        id:3,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('pizzas', null, {});
     
  }
};
