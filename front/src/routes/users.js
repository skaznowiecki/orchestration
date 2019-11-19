const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.index);

module.exports = router;