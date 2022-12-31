'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pizza_ingredients', [
      {
      name: "Pizza margarita",
      idPizza: 1,
      ingredient: "Salsa de tomate",
      quantity: 1,
      pizzeriaName: "Cheese Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 1,
      ingredient: "Mozzarella",
      quantity: 1,
      pizzeriaName: "Cheese Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 1,
      ingredient: "Orégano",
      quantity: 1,
      pizzeriaName: "Cheese Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 2,
      ingredient: "Salsa de tomate",
      quantity: 1,
      pizzeriaName: "Meat Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 2,
      ingredient: "Mozzarella",
      quantity: 1,
      pizzeriaName: "Meat Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 2,
      ingredient: "Orégano",
      quantity: 1,
      pizzeriaName: "Meat Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 3,
      ingredient: "Salsa de tomate",
      quantity: 1,
      pizzeriaName: "Veggie Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 3,
      ingredient: "Mozzarella",
      quantity: 1,
      pizzeriaName: "Veggie Lovers"
      },
      {
      name: "Pizza margarita",
      idPizza: 3,
      ingredient: "Orégano",
      quantity: 1,
      pizzeriaName: "Veggie Lovers"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('pizza_ingredients', null, {});
     
  }
};
