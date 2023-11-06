'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "superadmin",
      },
      {
        name: "admin",
      },
      {
        name: "employee",
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  }
};
