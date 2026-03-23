const express = require("express");
const cors = require("cors");
const appRoutes = require("./src/modules/App/app.route.js");
const errorMiddleware = require("./src/shared/errorMiddleware.js");
require("dotenv").config();

const app = express();

// Settings
app.use(cors());
app.use(express.json());

// Routes
app.use("/", appRoutes);

// Error handling
app.use(errorMiddleware);

module.exports = app;
