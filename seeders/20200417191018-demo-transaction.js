"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Transactions",
      [
        {
          checkin: "30-03-2020",
          checkout: "30-03-2021",
          houseId: 1,
          total: 3000000,
          status: "Waiting Payment",
          attachment: "bca.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transactions", null, {});
  }
};
