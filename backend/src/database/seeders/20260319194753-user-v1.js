'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("users", [
            {
                name: "Adriana",
                email: "adriana@gmail.com",
                password: "$2b$12$HZyOaIZxGfaAj1BC/xQynefRL0IaCJWUOBc81s8SgL0ZUG/KxWaEe",
                createdAt: new Date(), 
                updatedAt: new Date()
            },
            {
                name: "Amanda",
                email: "amanda@gmail.com",
                password: "$2b$12$HZyOaIZxGfaAj1BC/xQynefRL0IaCJWUOBc81s8SgL0ZUG/KxWaEe",
                createdAt: new Date(), 
                updatedAt: new Date()
            },
            {
                name: "Matheus",
                email: "matheus@gmail.com",
                password: "$2b$12$HZyOaIZxGfaAj1BC/xQynefRL0IaCJWUOBc81s8SgL0ZUG/KxWaEe",
                createdAt: new Date(), 
                updatedAt: new Date()
            },
            {
                name: "Carlos Eduardo",
                email: "carlosEduardo@gmail.com",
                password: "$2b$12$HZyOaIZxGfaAj1BC/xQynefRL0IaCJWUOBc81s8SgL0ZUG/KxWaEe",
                createdAt: new Date(), 
                updatedAt: new Date()
            },
        ], {});
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("users", null, {})
    },
};
