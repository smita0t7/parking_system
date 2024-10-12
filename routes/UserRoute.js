import express from 'express';
const router = express.Router();
import userController from "../controllers/userController.js";

import bodyParser from 'body-parser';

// Middleware to parse incoming request bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//register a new user
router.post("/register", userController.register);

//login a user
router.post("/login", userController.login);

//get user by Id
router.get("/:userId", userController.getUser);

export default router;