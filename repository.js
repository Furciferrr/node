const fs = require("fs");
const mongoose = require("mongoose");
const { readFile, writeJSONToFile } = require("./fs-utils");

const usersSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", usersSchema);

const getUsers = (search) => {
  if (search) {
    return User.find({ name: { $regex: search } });
  } else {
    return User.find();
  }
};

const getUser = (id) => {
  return User.find({ _id: id });
};

const deleteUser = (id) => {
  return User.deleteOne({ _id: id });
};

const updateUser = (id, name) => {
  return User.updateOne({ _id: id }, {name});
};

const addUser = async (name) => {
  const user = new User({ name });
  return user.save();
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;
exports.updateUser = updateUser;
