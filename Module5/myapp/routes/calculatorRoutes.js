const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController.js');           //./controllers/calculatorController

// Route for addition
router.get('/add', calculatorController.add);

// Route for subtraction
router.get('/subtract', calculatorController.subtract);

// Route for multiplication
router.get('/multiply', calculatorController.multiply);

// Route for division
router.get('/divide', calculatorController.divide);

module.exports = router;
