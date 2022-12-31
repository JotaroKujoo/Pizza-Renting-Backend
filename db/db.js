const {Sequelize} = require("sequelize")

require("dotenv").config()

const sequelize = new Sequelize(
    process.env.MYSQLDATABASE,
    process.env.MYSQLUSER,
    process.env.MYSQLPASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.MYSQLPORT,
        dialect: process.env.DB_DIALECT
    }
)

module.exports = sequelize