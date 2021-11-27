const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employeeReg.route');
const travelRequest=require('./travelRequest.route')

router.use('/employee', employeeRoutes);
router.use('/travelRequest',travelRequest);

module.exports = router;