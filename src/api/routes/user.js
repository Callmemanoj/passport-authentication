import express from "express";
const router = express.Router();
import UserController from "../controllers/user.js";
import passport from 'passport';

router.post("/createuser", UserController.createUser);
router.post("/loginuser", UserController.loginUser);
router.post('/test', passport.authenticate('jwt', { session: false }), UserController.test);

module.exports = router;