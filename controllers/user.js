const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    //get all users
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users fetched successfully!",
            users: users
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}

exports.getUser = async (req, res, next) => {
    //get a user by id
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        } else {
            res.status(200).json({
                message: "User fetched successfully!",
                user: user
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
    //if no id is provided
    if (!req.params.id) {
        res.status(400).json({
            message: "No id provided"
        });
    }
}

exports.loginUser = async (req, res, next) => {
    //get all users
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (user) {
            res.status(200).json({
                message: "User logged in successfully!",
                user: user
            });
        } else {
            res.status(404).json({
                message: "User not found!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}

exports.updateUser = async (req, res, next) => {
    //update user
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        }
        const tempUser = {
            name: req.body.name,
            email: req.body.email,
            matricule: req.body.matricule,
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
        matricule: req.body.matricule,
        password: req.body.password
    });
    //check if user already exists
    if (await User.findOne({
            email: req.body.email
        })) {
        //user already exists
        return res.status(400).json({
            message: "User already exists!"
        });
    }
    //save user
    try {
        const savedUser = await user.save();
        res.status(201).json({
            message: "User added successfully!",
            user: savedUser
        });
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
}

//delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            //user not found
            return res.status(404).json({
                message: "User not found!"
            });
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
        res.status(500).json({
            message: err
        });
    }
}