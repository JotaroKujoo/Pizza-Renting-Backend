'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('roles', [
      {
        id:1,
        type:"Admin"
      },
      {
        id:2,
        type:"User"
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('roles', null, {});
     
  }
};
