const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// GET request for all users
router.get("/list", userController.getUsers);

// POST request for creating a new user
router.post("/add", userController.postUser);

module.exports = router;