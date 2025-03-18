const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

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


// Load Swagger JSON
const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});