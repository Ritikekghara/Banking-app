const express = require('express');
const router = express.Router();
const ValidationMiddleware = require('../../middleware/ValidationMiddleware');
const AuthValidation = require('../../validation/AuthValidation');
const AuthMiddleware = require('../../middleware/AuthMiddleware');
const AuthController = require('../../controller/AuthController');

router.route("/login").post(AuthController.loginUser);
router.route("/register").post(AuthController.registerUser,AuthValidation.registerUser,ValidationMiddleware,AuthController.registerUser);

router.route("/profile").get(AuthMiddleware,AuthController.profileUser);
module.exports = router;