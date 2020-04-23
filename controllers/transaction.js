const { Transaction, House } = require("../models");

const inc = [
  {
    model: House,
    attributes: { exclude: ["createdAt", "updatedAt"] }
  }
];

exports.create = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    const addTrx = await Transaction.findOne({
      where: { id: transaction.id },
      include: inc
    });
    res.status(201).send({ data: addTrx });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    await Transaction.update(req.body, { where: { id: req.params.id } });
    const transaction = await Transaction.findOne({
      where: { id: req.params.id },
      include: inc
    });
    res.status(201).send({ data: transaction });
  } catch (err) {
    console.log(err);
  }
};

exports.detail = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: { id: req.params.id },
      include: inc
    });
    res.status(200).send({ data: transaction });
  } catch (err) {
    console.log(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: inc
    });
    res.status(200).send({ data: transaction });
  } catch (err) {
    console.log(err);
  }
};