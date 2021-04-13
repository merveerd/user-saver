const user = require("../models/user.model");

const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create(req.body);
    console.log("req body", req.body);
    res.status(200).json(doc);
  } catch (err) {
    console.log("CAN'T POSTED", err);
    res.status(404).json({ message: err });
  }
};

module.exports = {
  createOne: createOne(user),
};
