"use strict";
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    "House",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      typeRent: DataTypes.STRING,
      Amenities: {
        type: DataTypes.STRING,
        set(value) {
          return this.setDataValue("Amenities", value.toString());
        },
        get() {
          const data = this.getDataValue("Amenities");
          return data && data.split(",");
        }
      },
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
      city: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  House.associate = function(models) {
    House.belongsTo(models.User);
  };
  return House;
};
