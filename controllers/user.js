const { User, List } = require("../models");

exports.index = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [
        {
          model: List,
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ]
    });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
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
