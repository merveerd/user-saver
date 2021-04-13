const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller");

router.route("/").get(controllers.getMany).post(controllers.createOne);

module.exports = router;
