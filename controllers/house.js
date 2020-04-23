const { House, User } = require("../models");
const { Op } = require("sequelize");

const attr = { exclude: ["createdAt", "updatedAt"] };

exports.index = async (req, res) => {
  try {
    const house = await House.findAll({
      attributes: attr
    });
    res.status(200).send({ data: house });
  } catch (err) {
    console.log(err);
  }
};

exports.detail = async (req, res) => {
  try {
    const house = await House.findOne({
      where: { id: req.params.id },

      attributes: attr
    });
    res.status(200).send({ data: house });
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user; //put userId value
    if (req.role === "owner") {
      const newhouse = await House.create(req.body);
      const house = await House.findOne({
        where: { id: newhouse.id },
        include: [
          {
            model: User,
            attributes: ["username"]
          }
        ],
        attributes: { exclude: ["createdAt", "updatedAt", "UserId", "userId"] }
      });
      res.status(200).send({ data: house });
    } else {
      res.status(405).send({ message: "Forbidden Request,You are not Owner" });
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to create house!" });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await House.update(req.body, { where: { id: req.params.id } });
    const house = await House.findOne({
      where: { id: req.params.id },
      attributes: attr
    });
    res.status(201).send({ data: house });
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  const id = { id: req.params.id };
  try {
    await House.destroy({ where: id });
    res.status(200).send({ data: id });
  } catch (err) {
    console.log(err);
  }
};

exports.filter = async (req, res) => {
  try {
    const typeRent = req.query.typeRent; // Filter Type Rent Params
    const belowPrice = req.query.belowPrice; // Filter Price
    const price = { [Op.lte]: belowPrice }; // Using Operator < = query
    const house = await House.findAll({
      where: { typeRent, price },
      attributes: attr
    });
    res.status(200).send({ data: house });
  } catch (err) {
    console.log(err);
  }
};

// Owner Roles

exports.listing = async (req, res) => {
  try {
    const house = await House.findAll({
      where: { userId: req.user },
      attributes: { exclude: ["createdAt", "updatedAt", "userId", "UserId"] }
    });
    res.status(200).send({ data: house });
  } catch (err) {
    console.log(err);
  }
};
