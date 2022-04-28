const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use("/user", userRoutes);
app.listen(port);

console.log('Server started at http://localhost:' + port);