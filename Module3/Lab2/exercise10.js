//Module 3 - JS Intermediate - Question 10
//Garrard Glenn 



const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');


// a) Total number of minutes passed today
let minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b) Total number of seconds passed today
let secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate age
let birthDate = new Date('1990-01-01'); // Change this to your actual birthdate
let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

// Adjust for negative values (if birth date has not yet occurred this year)
if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}

if (ageDays < 0) {
    ageMonths--;
    let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate(); // Get number of days in the previous month
}

console.log(`I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`);












// d) Function to calculate the number of days in between two dates
function daysInBetween(date1, date2) {
    // Convert both dates to timestamps
    let diffInTime = date2.getTime() - date1.getTime();
    
    // Convert the time difference from milliseconds to days
    let diffInDays = diffInTime / (1000 * 3600 * 24);
    
    return Math.floor(diffInDays); // Return the whole number of days
}

// Example usage:
let startDate = new Date('2023-01-01');
let endDate = new Date(); // Today

console.log(`Days between the two dates: ${daysInBetween(startDate, endDate)} days`);







const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a) Total number of minutes passed today
let minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b) Total number of seconds passed today
let secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c) Calculate age
let birthDate = new Date('1990-01-01'); // Change this to your actual birthdate
let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

// Adjust for negative values (if birth date has not yet occurred this year)
if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}

if (ageDays < 0) {
    ageMonths--;
    let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate(); // Get number of days in the previous month
}

console.log(`I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`);

// d) Function to calculate the number of days in between two dates
function daysInBetween(date1, date2) {
    let diffInTime = date2.getTime() - date1.getTime();
    let diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.floor(diffInDays);
}

// Example usage:
let startDate = new Date('2023-01-01');
let endDate = new Date(); // Today
console.log(`Days between the two dates: ${daysInBetween(startDate, endDate)} days`);






