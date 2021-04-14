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
    res.status(401).json({ message: "User is not created, please try again" });
  }
};

const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Couldn't load the users" });
  }
};

module.exports = {
  createOne: createOne(user),
  getMany: getMany(user),
};
