'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pizzas', [
      {
        id: 1,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 2,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 3,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 4,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 5,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 6,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 7,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 8,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 9,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 10,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 11,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 12,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 13,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 14,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 15,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 16,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 17,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 18,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      },
      {
        id: 19,
        name: "Pizza margarita",
        pizzeriaName: "Cheese Lovers",
      },
      {
        id: 20,
        name: "Pizza margarita",
        pizzeriaName: "Meat Lovers",
      },
      {
        id: 21,
        name: "Pizza margarita",
        pizzeriaName: "Veggie Lovers",
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('pizzas', null, {});

  }
};
