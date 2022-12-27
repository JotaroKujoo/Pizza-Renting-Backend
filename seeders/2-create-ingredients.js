'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('ingredients', [
        {
        name: "Tomate"
        },
        {
          name: "Queso"
        },
        {
          name: "Oregano"
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('ingredients', null, {});
     
  }
};
