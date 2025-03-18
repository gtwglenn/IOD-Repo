const request = require('supertest');
const express = require('express');
const calculatorRoutes = require('../routes/calculatorRoutes');  // Adjust this path as necessary

// Set up a basic Express app for testing
const app = express();
app.use('/calculator', calculatorRoutes);

describe('Calculator Routes', () => {
    
    // Test addition route
    it('should add two numbers correctly', async () => {
        const response = await request(app)
            .get('/calculator/add')
            .query({ num1: 5, num2: 3 });
        
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(8);
    });

    // Test subtraction route
    it('should subtract two numbers correctly', async () => {
        const response = await request(app)
            .get('/calculator/subtract')
            .query({ num1: 10, num2: 4 });
        
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(6);
    });

    // Test multiplication route
    it('should multiply two numbers correctly', async () => {
        const response = await request(app)
            .get('/calculator/multiply')
            .query({ num1: 6, num2: 7 });
        
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(42);
    });

    // Test division route
    it('should divide two numbers correctly', async () => {
        const response = await request(app)
            .get('/calculator/divide')
            .query({ num1: 20, num2: 5 });
        
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(4);
    });

    // Test division by zero
    it('should return an error when dividing by zero', async () => {
        const response = await request(app)
            .get('/calculator/divide')
            .query({ num1: 10, num2: 0 });
        
        expect(response.status).toBe(400);  // Bad request
        expect(response.body.error).toBe("Cannot divide by zero.");
    });
});
