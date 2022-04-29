const users = [];

var nameSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
    id: Number,
    time: String
});

var User = mongoose.model('User', nameSchema);

exports.getUsers = (req, res, next) => {
    res.status(200).json({
        message: "Users fetched successfully!",
        users: users
    });
}

exports.postUser = (req, res, next) => {
    //check if username already exists
    if (users.find(user => user.username === req.body.username)) {
        res.status(400).json({
            message: "Username already exists!"
        });
    } else {
        const user = {
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password,
            id: users.length,
            time: new Date().toLocaleString()
        }
        users.push(user);
        res.status(201).json({
            message: "User created successfully!",
            user: user
        });
    }
}