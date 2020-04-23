const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username
      }
    });

    if (!user) {
      res.status(401).send({ message: "Authentication Failure" });
    } else {

      const role = user.role;

      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          jwt.sign({ id: user.id }, process.env.SECRET_KEY, (err, token) => {
            const data = {
              username,
              role,
              token
            };
            res.status(200).send({ data });
          });
        } else {
          res.status(401).send({ message: "Invalid Username or Password" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};
