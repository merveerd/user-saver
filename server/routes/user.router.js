const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller");

router.route("/").post(controllers.createOne).get(controllers.getMany);

module.exports = router;
