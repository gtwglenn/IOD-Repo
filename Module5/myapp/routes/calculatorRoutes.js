const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200).json({ result: sum });
});

// Route for subtraction
router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2;
    console.log(difference);
    res.status(200).json({ result: difference });
});

// Route for multiplication
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(product);
    res.status(200).json({ result: product });
});

// Route for division
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

if (number2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
}

let quotient = number1 / number2;

console.log(quotient);
res.status(200).json({ result: quotient });
});

module.exports = router;