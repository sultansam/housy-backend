const { House, City } = require("../models");
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  try {
    const typeRent = req.query.typeRent; // Filter Type Rent Params
    const belowPrice = req.query.belowPrice; // Filter Price
    const price = { [Op.lte]: belowPrice }; // Using Operator < = query

    const house = await House.findAll({
      where: {
        typeRent: typeRent,
        price: price
      },
      include: [
        {
          model: City,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "CityId"] }
    });
    res.status(200).send({ data: house });
  } catch (error) {
    console.log(error);
  }
};

exports.detail = async (req, res) => {
  try {
    const house = await House.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: City,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "CityId"] }
    });
    res.status(200).send({ data: house });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const house = await House.create(req.body);
    const Addhouse = await House.findOne({
      include: [
        {
          model: City,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ],
      where: { id: house.id },
      attributes: { exclude: ["createdAt", "updatedAt", "CityId"] }
    });
    res.status(201).send({ data: Addhouse });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await House.update(req.body, { where: { id: req.params.id } });
    const house = await House.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: City,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "CityId"] }
    });
    res.status(201).send({ data: house });
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res) => {
  const id = { id: req.params.id };
  try {
    await House.destroy({ where: id });
    res.status(200).send({ data: id });
  } catch (error) {
    console.log(error);
  }
};
