'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MeasurementUnits', [
        { name: 'fluid ounces', createdAt: new Date(), updatedAt: new Date() },
        { name: 'gallons', createdAt: new Date(), updatedAt: new Date() },
        { name: 'grams', createdAt: new Date(), updatedAt: new Date() },
        { name: 'liters', createdAt: new Date(), updatedAt: new Date() },
        { name: 'milliliters', createdAt: new Date(), updatedAt: new Date() },
        { name: 'ounces', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
