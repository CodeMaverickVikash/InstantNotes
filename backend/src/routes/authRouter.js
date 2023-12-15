const express = require("express");
const validator = require("express-validator");
const { hasUserToken } = require("../middleware");
const {
  handleSignupUser,
  handleLoginUser,
  handleGetUser,
} = require("../controllers/authController");
const router = express.Router();

router.post(
  "/createuser",
  [
    validator.body("name", "Enter a valid name").isLength({ min: 3 }),
    validator.body("email").isEmail(),
    validator
      .body("password", "Password must be atleast 5 characters")
      .isLength({ min: 5 }),
  ],
  handleSignupUser
);

router.post(
  "/login",
  [
    validator.body("email").isEmail(),
    validator.body("password", "Password can't be blank").exists(),
  ],
  handleLoginUser
);
router.post("/getuser", hasUserToken, handleGetUser);

module.exports = router;
