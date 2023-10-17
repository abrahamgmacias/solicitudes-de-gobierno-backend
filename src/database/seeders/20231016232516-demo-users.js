'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Abraham",
        last_name: "Gonzalez",
        birthday: String(new Date(1995, 1, 24)),
        email: "abrahamgmacias@vuram.com",
        password: "secret_password",
        phone_number: "6142274321",
        role_id: 1,
        active: true
      },
      {
        first_name: "Diana",
        last_name: "Parada",
        birthday: String(new Date(1997, 1, 24)),
        email: "dianaeparada@telecom.com",
        password: "secret_password",
        phone_number: "6142274323",
        role_id: 2,
        active: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
