const users = [];

exports.getUsers = (req, res, next) => {
    res.status(200).json({
        message: "Users fetched successfully!",
        users: users
    });
}

exports.postUser = (req, res, next) => {
    console.log(req);
    const user = {
        id: users.length,
        name: req.body.name,
        password: req.body.password
    }
    users.push(user);
    res.status(201).json({
        message: "User created successfully!",
        user: user
    });
}
