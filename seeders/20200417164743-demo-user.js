"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Lucky",
          username: "luckyaxl",
          email: "luckyaxl@gmail.com",
          password: "123456",
          ListId: 1,
          gender: "male",
          address: "Jalan Marvel 2 RT 10",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
