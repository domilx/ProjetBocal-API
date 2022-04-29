const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require('../models/user');
const router = express.Router();

exports.getUsers = async (req, res, next) => {
    //get all users
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users fetched successfully!",
            users: users
        });
    } catch (err) {
        //server error
        res.status(500).json({
            message: err
        });
    }
}

exports.postUser = async (req, res, next) => {
    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    //check if user already exists
    /*
    if (await user.findOne({
            email: req.body.email
        })) {
        //user already exists
        res.status(400).json({
            message: "User already exists!"
        });
    } */
    //save user
    try {
        const savedUser = await user.save();
        res.status(201).json({
            message: "User added successfully!",
            user: savedUser
        });
    } catch (err) {
        //user did not fill in all fields
        res.status(400).json({
            message: err
        });
    }
}