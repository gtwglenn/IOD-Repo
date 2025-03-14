// calculatorController.js

const add = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200).json({ result: sum });
};

const subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2;
    console.log(difference);
    res.status(200).json({ result: difference });
};

const multiply = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(product);
    res.status(200).json({ result: product });
};

const divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (number2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    let quotient = number1 / number2;
    console.log(quotient);
    res.status(200).json({ result: quotient });
};

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
