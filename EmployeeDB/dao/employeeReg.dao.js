const Employee = require('../models/employeeReg');
var employeeDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEmployee: updateEmployee
}

function findAll() {
    return Employee.findAll();
}

function findById(emp_id) {
    return Employee.findByPk(emp_id);
}

function deleteById(emp_id) {
    return Employee.destroy({ where: { emp_id: emp_id } });
}

function create(employee) {
    var newEmployee = new Employee(employee);
    return newEmployee.save();
}

function updateEmployee(Employee, emp_id) {
    var updateEmployee = {
        First_Name: employee.First_Name,
        Last_Name : employee.Last_Name,
        Age: employee.Age,
        Gender: employee.Gender,
        Address : employee.Address,
        Phone_Number : employee.Phone_Number,
        l_id : employee.l_id,
    };
    return Employee.update(updateEmployee, { where: { emp_id: emp_id } });
}
module.exports = employeeDao;