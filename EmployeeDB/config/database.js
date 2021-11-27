const { Sequelize } = require('sequelize');
const db = new Sequelize('employee', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage : 'employee.sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;