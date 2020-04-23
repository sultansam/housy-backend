const { House, User, List } = require("../models");

exports.index = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [
        {
          model: List,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          model: House,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

exports.get = async (req, res) => {
  const id = req.user;
  try {
    const user = await User.findOne({
      where: { id: id },
      attributes: { exclude: ["createdAt", "updatedAt"] }
    });
    res.status(200).send({ data: user });
  } catch (error) {}
};

exports.remove = async (req, res) => {
  const id = { id: req.params.id };
  try {
    await User.destroy({ where: id });
    res.status(200).send({ data: id });
  } catch (error) {
    console.log(error);
  }
};
