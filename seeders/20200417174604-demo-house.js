"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Houses",
      [
        {
          name: "House Astina",
          address: "Permata Bintaro Residence Pondok Aren,Tangerang Selatan",
          price: 3000000,
          typeRent: "Year",
          Amenities: "Furnished",
          bedroom: 3,
          bathroom: 2,
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Houses", null, {});
  }
};
