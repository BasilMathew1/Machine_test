const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('book', {
    emp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Last_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Phone_Number: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    l_id: {
        type: Sequelize.NUMBER,
        foreignkey:true,
        allowNull: false
    }
});

module.exports = Employee;