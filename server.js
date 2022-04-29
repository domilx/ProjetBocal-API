const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const userRoutes = require('./routes/user');

//define variables
const port = process.env.PORT || 3000;
const db = mongoose.connection

//connect to mongoose
mongoose.connect('mongodb+srv://user:pass@cluster0.sfaag.mongodb.net/API', {
    useNewUrlParser: true
})
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//use middleware
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.listen(port);

//server started
console.log('Server started at http://localhost:' + port);