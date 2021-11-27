const employeeDao = require('../dao/employeeReg.dao');
var employeeController = {
    addEmployee: addEmployee,
    findEmployee: findEmployee,
    findEmployeeById: findEmployeeById,
    updateEmployee: updateEmployee,
    deleteById: deleteById
}

function addEmployee(req, res) {
    let employee = req.body;
    employeeDao.create(employee).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeById(req, res) {
    employeeDao.findById(req.params.emp_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    bookDao.deleteById(req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "Employee deleted successfully",
                employee: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEmployee(req, res) {
    employeeDao.updateEmployee(req.body, req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "Employee updated successfully",
                employee: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployee(req, res) {
    employeeDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = employeeController;