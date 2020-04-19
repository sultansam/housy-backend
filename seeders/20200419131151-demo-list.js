"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Lists",
      [
        {
          name: "Owner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tenant",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lists", null, {});
  }
};
