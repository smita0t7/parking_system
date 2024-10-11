import express from 'express';
const router = express.Router();
import userController from "../controllers/userController";

import bodyParser from 'body-parser';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//register a new user
router.post("/register", userController.register);

//login a user
router.post("/login", userController.login);

//get user by Id
router.get("/:userId", userController.getUser);

export default router;