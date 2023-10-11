const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER , null, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    port: process.env.DB_PORT
});


const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

connectionDatabase()