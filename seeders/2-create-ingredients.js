'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('ingredients', [
        {
          name: "Salsa de tomate"
        },
        {
          name: "Mozzarella"
        },
        {
          name: "Orégano"
        },
        {
          name: "Cebolla"
        },
        {
          name: "Aceite de oliva"
        },
        {
          name: "Jamón"
        },
        {
          name: "Pepperoni"
        },
        {
          name: "Bacon"
        },
        {
          name: "Champiñones"
        },
        {
          name: "Atún"
        },
        {
          name: "Anchoas"
        },
        {
          name: "Aceitunas negras"
        },
        {
          name: "Piña"
        },
        {
          name: "Carne picada"
        },
        {
          name: "Salchichas"
        },
        {
          name: "Gambas"
        },
        {
          name: "Jamón Serrano"
        },
        {
          name: "Salsa de tomate natural"
        },
        {
          name: "Salsa barbacoa"
        },
        {
          name: "Pollo"
        },
        {
          name: "Maíz"
        },
        {
          name: "Mejillones"
        },
        {
          name: "Huevo"
        },
        {
          name: "Cebolla caramelizada"
        },
        {
          name: "Queso de cabra"
        },
        {
          name: "Alcachofa"
        },
        {
          name: "Pimiento rojo"
        },
        {
          name: "Pimiento verde"
        },
        {
          name: "Hamburguesa"
        },
        {
          name: "Bacon crujiente"
        },
        {
          name: "Queso cheddar"
        },
        {
          name: "Nata"
        },
        {
          name: "Queso feta"
        },
        {
          name: "Rúcula"
        }
        

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('ingredients', null, {});
     
  }
};
