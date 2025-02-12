//Module 3 - JS Advanced - Question 10
//Garrard Glenn 


import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLData(urls) {
    try {
        // Check if we are given a single URL or an array of URLs
        if (Array.isArray(urls)) {
            // Fetch all URLs concurrently using Promise.all
            const data = await Promise.all(urls.map(async (url) => {
                const response = await fetch(url);
                if (response.status === 200) {
                    return await response.json();
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            }));
            return data; // Return the array of data
        } else {
            // If it's a single URL, proceed with the previous logic
            const response = await fetch(urls);
            if (response.status === 200) {
                return await response.json();
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        }
    } catch (error) {
        throw error; // Handle errors for both individual and multiple URLs
    }
}

// Test with multiple URLs
fetchURLData([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
])
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// Test with a single URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// Test with invalid URLs
fetchURLData([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://invalidurl.com'
])
    .then(data => console.log(data))
    .catch(error => console.error(error.message));


