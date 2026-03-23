const { Router } = require("express");
const appController = require("./app.controller.js")
const authMiddleware = require("../../shared/authMiddleware.js")
const routes = Router()

routes.post("/register", appController.userRegister)
routes.post("/login", appController.userLogin)
routes.get("/", authMiddleware, appController.authentication)

module.exports = routes
