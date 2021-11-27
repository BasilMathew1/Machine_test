const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeReg.controller');

router.post('/', employeeController.addEmployee);
router.get('/', employeeController.findEmployee);
router.get('/:emp_id', employeeController.findEmployeeById);
router.put('/:emp_id', employeeController.updateEmployee);
router.delete('/:emp_id', employeeController.deleteById);

module.exports = router;
