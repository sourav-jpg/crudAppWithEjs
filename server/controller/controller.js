const userDb = require("../model/model");

//create and save user
const createUser = async (req, res, next) => {
  //validateRequest
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  //new user
  let { name, email, gender, status } = req.body;
  try {
    let user = await userDb.insertMany([{ name, email, gender, status }]);
    res.json({
      error: false,
      message: "user created succcessfully",
      data: null,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//get all users
const getUser = async (req, res, next) => {
  try {
    let user = await userDb.find().lean();
    res.json({
      error: false,
      message: "user fetched succcessfully",
      data: user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//get user by id

const getUserById = async (req, res, next) => {
  let id = req.params.id;
  try {
    let user = await userDb.findById(id).lean();
    res.json({
      error: false,
      message: "user fetched successfully",
      data: user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//update user
const updateUser = async (req, res, next) => {
  let { name, email, gender, status } = req.body;
  try {
    let user = await userDb.findOne({ _id: req.params.id });
    if (user) {
      await userDb.updateOne(
        { _id: req.params.id },
        {
          $set: { name, email, gender, status },
        }
      );
      res.json({
        error: false,
        message: "user updated successfully",
        data: { name, email, gender, status },
      });
    } else {
      res.json({
        error: true,
        message: "Invalid Id",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//delete user

const deleteUser = async (req, res, next) => {
  try {
    let user = await userDb.findOne({ _id: req.params.id });
    if (user) {
      await userDb.deleteOne({ _id: req.params.id });
      res.json({
        error: false,
        message: "user deleted successfully",
        data: null,
      });
    } else {
      res.json({
        error: true,
        message: "Invalid Id",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserById,
};
