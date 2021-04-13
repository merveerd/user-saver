const handleErrors = require("../helper/errorHandler");
const user = require("../models/user.model");

const createOne = (model) => async (req, res) => {
  try {
    const { email } = req.body;
    let user = await model.find({ email });
    if (user.length > 0) {
      return res
        .status(400)
        .json({ message: "A user with that email already exists." });
    }
    const doc = await model.create(req.body);
    res.status(200).json(doc);
  } catch (err) {
    console.log("CAN'T POSTED", handleErrors(err));
    res.status(400).json(handleErrors(err));
  }
};

const getMany = (model) => async (req, res) => {
  try {
    console.log("getMany");
    const docs = await model.find();
    console.log("herre, docs");
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err });
  }
};

module.exports = {
  createOne: createOne(user),
  getMany: getMany(user),
};
