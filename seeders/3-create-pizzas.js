'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('pizzas', [
        {
        id: 1,
        name: "Pizza margarita",
        name_pizzeria: "Cheese Lovers",
        },
        {
        id:2,
        name: "Pizza margarita",
        name_pizzeria: "Meat Lovers",
        },
        {
        id:3,
        name: "Pizza margarita",
        name_pizzeria: "Veggie Lovers",
        },
        {
        id:4,
        name: "Pizza prosciutto",
        name_pizzeria: "Meat Lovers",
        },
        {
        id:5,
        name: "Pizza pepperoni",
        name_pizzeria: "Meat Lovers",
        },
        {
        id:6,
        name: "Pizza Gran Torino",
        name_pizzeria: "Meat Lovers",
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('pizzas', null, {});
     
  }
};
