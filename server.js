const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

const userRoutes = require('./routes/user');

const port = process.env.PORT || 3000;
const db = mongoose.connection

/* mongoose.connect('mongodb+srv://user:pass@cluster0.sfaag.mongodb.net/test', {
    useNewUrlParser: true
}) 
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
*/

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.listen(port);

console.log('Server started at http://localhost:' + port);