const express = require('express');
const app = express();
const port = 3000;

const testRoutes = require('./routes/myTestRoutes.js');

// const calculatorRoutes = require('./routes/calculatorRoutes.js')


app.use('/mytest', testRoutes);

//app.use('/calculator, calcRoutes);    ?? 

app.use('/', express.static('public')); 

// probably overwrite this + ./routes/myTestRoutes.js for Module 5 



const calculatorRoutes = require('./routes/calculatorRoutes.js');

 // map the calculator routes to our app

app.use('/calculator', calculatorRoutes);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   });