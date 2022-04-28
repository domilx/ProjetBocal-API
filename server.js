const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 8080; 
const db = mongoose.connection

dotenv.config()
mongoose.connect(process.env.DATABASE_URl, {
    useNewUrlParser: true
})
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.listen(port);

console.log('Server started at http://localhost:' + port);