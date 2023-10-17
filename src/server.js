const express = require('express');

const routes = require('./routes');

require("express-async-errors");

const AppError = require("./utils/AppError");

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))