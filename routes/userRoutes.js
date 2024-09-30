const express = require ("express");
const router = express.Router();
const userController = require("../controllers/userController");

//register a new user
router.post("/register", userController.register);

//login a user
router.post("/login", userController.login);

//get user by Id
router.get("/:userId", userController.getUser);

module.exports = router;