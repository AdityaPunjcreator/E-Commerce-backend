const express = require("express");
const authController = require("../Controller/userController");
const authrouter = express.Router(); // using the Router method on express to create the routes

authrouter.post("/signup", authController.signup); // using the signup function as a property on export object(here authController)
authrouter.post("/login", authController.login); // using the login function as a property on export object(here authController)
authrouter.put(
  "/editprofile",
  authController.protectRoute,
  authController.editProfile
); // router to edit the profile of the user

module.exports = authrouter;
