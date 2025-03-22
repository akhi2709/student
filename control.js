const User = require("./user");
const userValidation = require("./validation");

// Create a new user
const createUser = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
