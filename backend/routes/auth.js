// This is our api
const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "Vikashisagoodb$oy";

const router = express.Router();

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required 
// req.body/res.body means request/response me body do
router.post('/createuser', [
  body('name', "Enter a valid name").isLength({ min: 3 }),
  body('email').isEmail(),
  body('password', "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {// request, response
  let success = false;
  // if there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) { // is not empty
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    // check whether the user with this email exists already 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exists" }); // we have send bad request
    }

    // gernerating hasses of password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user into mongodb 
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    // res.json(user);
    res.json({ success, authtoken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error"); // status 500 means internal server error 
  }

});



// ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required 
router.post('/login', [
  body('email').isEmail(),
  body('password', "Password can't be blank").exists(),
], async (req, res) => {
  let success = false;
  // if there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) { // is not empty
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if(!user){ // not user
      success = false;
      return res.status(400).json({error: "Please try to login with correct credential"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){ // not match password
      success = false;
      return res.status(400).json({success, error: "Please try to login with correct credential"});
    }

    const data = {
      user: {
        id: user.id,
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");  
  }

});


// ROUTE 3: Get loggedin user using: POST "/api/auth/login". login required 
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send({user});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");  
  }
})

module.exports = router;