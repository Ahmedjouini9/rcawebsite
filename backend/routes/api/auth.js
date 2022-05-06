const router = require("express").Router();
const User = require("../../models/client");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt= require('bcrypt')

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

const CLIENT_URL = "http://localhost:3000/";

//REGISTER
router.post("/register", async (req, res) => {

  const {errors, isValid} = validateRegisterInput(req.body)
  if(!isValid){
    console.log(errors.Error)
    errMsg = errors.Error
    return res.status(400).json({Error: errMsg})
}
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const usemail = await User.findOne({ email: req.body.email });
    if(usemail){
      res.status(404).json(`${usemail} already used`);
    } else{
    const usern = await User.findOne({ username: req.body.username });
    if(usern){
     res.status(404).json(`${usern} already used`);
    }else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      const user = await newUser.save();
      res.status(200).json(user);
    }
  }
  } catch (err) {
    res.status(500).json(err)
  }
});


//LOGIN
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});
router.post("/login", async (req, res) => {
  const {errors, isValid} = validateLoginInput(req.body)

  if(!isValid){
    return res.status(400).json(errors)
}
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user) 
  } catch (err) {
    res.status(500).json(err)
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

//logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;

