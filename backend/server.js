const db = require("./src/database/models/index.js");
const app = require("./app.js");

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Banco de dados conectado com sucesso!");

        const PORT = process.env.PORT;
        app.listen(PORT || 8080, () =>
            console.log(`Servidor rodando na porta ${PORT}`),
        );
    } catch (error) {
        return console.log("Erro ao se conectar com o servidor: ", error);
        process.exit(1);
    }
};

startServer();
