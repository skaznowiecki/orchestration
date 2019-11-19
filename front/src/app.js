const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const port = process.env.PORT || 4500;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/users', userRoute);

app.listen(port);

console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
