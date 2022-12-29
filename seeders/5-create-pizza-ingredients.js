'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pizza_ingredients', [
      {
      name: "Pizza margarita",
      idPizza: 1,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Orégano",
      },
      {
      name: "Pizza margarita",
      idPizza: 2,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Orégano",
      },
      {
      name: "Pizza margarita",
      idPizza: 3,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Orégano",
      },
      {
      name: "Pizza prosciutto",
      idPizza: 4,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Orégano",
      ingredient_4: "Jamón"
      },
      {
      name: "Pizza pepperoni",
      idPizza: 5,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Pepperoni",
      ingredient_4: "Orégano"
      },
      {
      name: "Pizza Gran Torino",
      idPizza: 6,
      ingredient_1: "Salsa de tomate",
      ingredient_2: "Mozzarella",
      ingredient_3: "Bacon",
      ingredient_4: "Cebolla",
      ingredient_5: "Orégano"
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('pizza_ingredients', null, {});
     
  }
};
