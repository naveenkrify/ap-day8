const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController');
const Employee = require('../models/Employee');


router.get('/',EmployeeController.index)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)

module.exports = router;
