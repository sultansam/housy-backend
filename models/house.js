'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeRent: DataTypes.STRING,
    Amenities: DataTypes.STRING,
    bedroom: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {});
  House.associate = function(models) {
    House.belongsTo(models.City);
  };
  return House;
};