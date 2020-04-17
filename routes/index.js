const express = require("express");
const router = express.Router();
require("dotenv").config();

const { authenticated } = require("../middleware/auth");

const { signin } = require("../controllers/signin");
const { signup } = require("../controllers/signup");

const {
  index: getData,
  detail: getDetail,
  create: addHouse,
  update: updateHouse,
  delete: deleteHouse
} = require("../controllers/house");

router.post("/signin", signin);
router.post("/signup", signup);

router.get("/houses", getData);
router.get("/house/:id", getDetail);
router.post("/house", authenticated, addHouse);
router.post("/house/:id", authenticated, updateHouse);
router.delete("/house/:id", authenticated, deleteHouse);

module.exports = router;
