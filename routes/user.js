const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// GET request for all users
router.get("/list", userController.getUsers);

// POST request for creating a new user
router.post("/add", userController.postUser);

// POST update request for updating a user
router.post("/update/:id", userController.updateUser);

// POST login request for logging in a user
router.post("/login", userController.loginUser);

module.exports = router;