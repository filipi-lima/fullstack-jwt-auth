const appService = require("./app.service.js");

const userRegister = async (req, res, next) => {
    try {
        const user = await appService.userRegister(req.body);

        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

const userLogin = async (req, res, next) => {
    try {
        const {token, user} = await appService.userLogin(req.body);

        res.status(200).json({ token, name: user.name });
    } catch (error) {
        next(error);
    }
};

const authentication = async (req, res, next) => {
    try {
        const decoded = req.user

        res.status(200).json({ name: decoded.name })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userRegister,
    userLogin,
    authentication,
};
