const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// GET request for all users
router.get("/get", userController.getUsers);

// POST request for creating a new user
router.post("/register", userController.postUser);

// POST update request for updating a user
router.post("/update/:id", userController.updateUser);

// POST login request for logging in a user
router.post("/login", userController.loginUser);

//POST request for deleting a user
router.post("/delete/:id", userController.deleteUser);

//GET request for getting a user by id
router.get("/getId/:id", userController.getUser);

module.exports = router;