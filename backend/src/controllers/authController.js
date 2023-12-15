const validator = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const commonUtil = require("../services/commonService");

const JWT_SECRET = "Vikashisagoodb$oy";

const handleSignupUser = async (req, res) => {
  let success = false;

  const isValidRequest = commonUtil.isValidRequest(req);
  if (!isValidRequest.isValid) {
    return res.status(400).json({ errors: isValidRequest.errors.array() });
  }

  try {
    let user = await userModel.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        success,
        error: "Sorry a user with this email already exists",
      }); // we have send bad request
    }

    // password hassing and store into db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user into mongodb
    user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET); // create auth token
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // status 500 means internal server error
  }
};

const handleLoginUser = async (req, res) => {
  let success = false;

  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // return Bad request and the errors
  }

  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ error: "Please try to login with correct credential" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    const decriptedValue = await bcrypt.decodeBase64(user.password);
    console.log(decriptedValue);
    if (!passwordCompare) {
      // not match password
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credential",
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
};

const handleGetUser = async (req, res) => {
  try {
    let userid = req.user.id;
    const user = await userModel.findById(userid).select("-password");
    res.send({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  handleSignupUser,
  handleLoginUser,
  handleGetUser,
};
