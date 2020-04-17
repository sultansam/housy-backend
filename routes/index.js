const express = require("express");
const router = express.Router();
require("dotenv").config();

const { authenticated } = require("../middleware/auth");

const { signin } = require("../controllers/signin");
const { signup } = require("../controllers/signup");

router.post("/signin", signin);
router.post("/signup", signup);

const {
  index: getData,
  detail: getDetail,
  create: addHouse,
  update: updateHouse,
  delete: deleteHouse
} = require("../controllers/house");

router.get("/houses", getData);
router.get("/house/:id", getDetail);
router.post("/house", authenticated, addHouse);
router.patch("/house/:id", authenticated, updateHouse);
router.delete("/house/:id", authenticated, deleteHouse);

const {
  create: createTrx,
  update: updateTrx,
  detail: getTrx,
  getAll: getAll
} = require("../controllers/transaction");

router.post("/transaction", authenticated, createTrx);
router.patch("/order/:id", authenticated, updateTrx);
router.get("/order/:id", authenticated, getTrx);
router.get("/orders", authenticated, getAll);

const { index: getUser, remove: removeUsr } = require("../controllers/user");
router.get("/users", authenticated, getUser);
router.delete("/users/:id", authenticated, removeUsr);

module.exports = router;
