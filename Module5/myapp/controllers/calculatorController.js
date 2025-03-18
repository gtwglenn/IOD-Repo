const Calculator = require('../library/calculator');

const calculator = new Calculator();

const calculatorController = {
    add: (req, res) => {
        const { num1, num2 } = req.query;
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid input. Please provide numbers." });
        }
        const result = calculator.add(parseFloat(num1), parseFloat(num2));
        res.json({ id: calculator.id, result });
    },

    subtract: (req, res) => {
        const { num1, num2 } = req.query;
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid input. Please provide numbers." });
        }
        const result = calculator.subtract(parseFloat(num1), parseFloat(num2));
        res.json({ id: calculator.id, result });
    },

    multiply: (req, res) => {
        const { num1, num2 } = req.query;
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid input. Please provide numbers." });
        }
        const result = calculator.multiply(parseFloat(num1), parseFloat(num2));
        res.json({ id: calculator.id, result });
    },

    divide: (req, res) => {
        const { num1, num2 } = req.query;
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid input. Please provide numbers." });
        }
        if (parseFloat(num2) === 0) {
            return res.status(400).json({ error: "Cannot divide by zero." });
        }
        const result = calculator.divide(parseFloat(num1), parseFloat(num2));
        res.json({ id: calculator.id, result });
    }
};

module.exports = calculatorController;
