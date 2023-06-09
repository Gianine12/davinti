require('dotenv').config();

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    
    define: {
        timestamps: true,
        underscored: true
    }
}
