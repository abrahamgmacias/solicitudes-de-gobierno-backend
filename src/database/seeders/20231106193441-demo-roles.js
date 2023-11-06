'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        id: 1,
        name: "superadmin",
      },
      {
        id: 2,
        name: "admin",
      },
      {
        id: 3,
        name: "employee",
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  }
};
