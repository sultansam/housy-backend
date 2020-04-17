const { User } = require("../models");

exports.index = async (req, res) => {
  try {
    const user = await User.findAll();
    res.send({ data: Users });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};