const { Transaction, House, City } = require("../models");

exports.create = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    const addTrx = await Transaction.findOne({
      where: { id: transaction.id },
      include: [
        {
          model: House,
          include: [
            {
              model: City,
              attributes: { exclude: ["createdAt", "updatedAt"] }
            }
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.status(201).send({ data: addTrx });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await Transaction.update(req.body, { where: { id: req.params.id } });
    const transaction = await Transaction.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: House,
          include: [
            {
              model: City,
              attributes: { exclude: ["createdAt", "updatedAt"] }
            }
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.status(201).send({ data: transaction });
  } catch (error) {
    console.log(error);
  }
};

exports.detail = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: House,
          include: [
            {
              model: City,
              attributes: { exclude: ["createdAt", "updatedAt"] }
            }
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: [
        {
          model: House,
          include: [
            {
              model: City,
              attributes: { exclude: ["createdAt", "updatedAt"] }
            }
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
  }
};
