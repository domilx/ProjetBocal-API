const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require('../models/user');
const router = express.Router();
const errorCreator = require('../functions/errorCreator');

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
        errorCreator(500, "Server-side error", next)
    }
}

exports.getUser = async (req, res, next) => {
    //get a user by id
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            message: "User fetched successfully!",
            user: user
        });
    } catch (err) {
        //server error
        return errorCreator(500, "Server-side error", next)
    }
    //if no id is provided
    if (!req.params.id) {
        errorCreator(400, "No id provided", next)
    }
}

exports.loginUser = async (req, res, next) => {
    //get all users
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (!user) {
            return errorCreator(401, "Invalid credentials!", next)
        }
        res.status(200).json({
            message: "User logged in successfully!",
            user: user
        });
    } catch (err) {
        //server error
        errorCreator(500, "Server-side error", next)
    }
}

exports.updateUser = async (req, res, next) => {
    //update user
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            //user not found
            return errorCreator(404, "User not found!", next)
        }
        const tempUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        };

        const updatedUser = await User.updateOne({
            _id: req.params.id
        }, tempUser);

        res.status(200).json({
            message: "User updated successfully!",
            updatedUser: updatedUser
        });
    } catch (err) {
        //server error
        errorCreator(500, "Server-side error", next)
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
    if (await User.findOne({
            email: req.body.email
        })) {
        //user already exists
        return errorCreator(400, "User already exists!", next)
    }
    //save user
    try {
        const savedUser = await user.save();
        res.status(201).json({
            message: "User added successfully!",
            user: savedUser
        });
    } catch (err) {
        //user did not fill in all fields
        errorCreator(500, "Server-side error", next)
    }
}

//delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            //user not found
            return errorCreator(404, "User not found!", next)
        }
        const deletedUser = await User.deleteOne({
            _id: req.params.id
        });
        res.status(200).json({
            message: "User deleted successfully!",
            deletedUser: deletedUser
        });
    } catch (err) {
        //server error
        errorCreator(500, "Server-side error", next)
    }
}