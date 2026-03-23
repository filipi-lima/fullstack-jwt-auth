const db = require("../../database/models");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRegister = async (data) => {
    const { name, email, password } = data;

    if (!name || !email || !password) {
        const error = new Error("Todos os campos são obrigatórios");
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isEmail(email)) {
        const error = new Error("Email inválido");
        error.statusCode = 400;
        error.typeError = "email"
        throw error;
    }

    const emailExists = await db.User.findOne({ where: { email } });

    if (emailExists) {
        const error = new Error("Esse email já está sendo utilizado");
        error.statusCode = 400;
        error.typeError = "email"
        throw error;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await db.User.create({ name, email, password: passwordHash });

    return user;
};

const userLogin = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
        const error = new Error("Todos os campos são obrigatórios");
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isEmail(email)) {
        const error = new Error("Email inválido");
        error.statusCode = 400;
        error.typeError = "email"
        throw error;
    }

    const user = await db.User.findOne({ where: { email } });

    if (!user) {
        const error = new Error("Usuário não encontrado");
        error.statusCode = 404;
        error.typeError = "email"
        throw error;
    }

    const passwordValidation = await bcrypt.compare(password, user.password);

    if (!passwordValidation) {
        const error = new Error("Senha inválida");
        error.statusCode = 401;
        error.typeError = "password"
        throw error;
    }

    const SECRET = process.env.SECRET;
    const token = jwt.sign({ id: user.id, name: user.name }, SECRET, {
        expiresIn: "1h",
    });

    return {token, user};
};

module.exports = {
    userRegister,
    userLogin,
};
