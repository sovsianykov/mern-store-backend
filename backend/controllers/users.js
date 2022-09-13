const User = require("../models/User");



exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    await res.status(200).json(users);
  } catch (e) {
    res.status(404).json({ message: "Users were not found !!!" });
    console.log(e);
  }
};
