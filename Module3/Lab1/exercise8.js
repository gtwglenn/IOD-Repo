//Module 3 - JS Fundamentals - Question 8
//Garrard Glenn 




// 8.) 
/*
    function --> takes object as (argument) --> use for...in loop --> print all object properties + values
    
    create new object - different city (+properties) --> call function again w/ new object 

    self-hint: 

    for (let key in person) {
    console.log(key + ": " + person[key]);
}

*/


const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
};
// create a new city object sydney 

const stockholm = {

    //987,661
        name: 'Stockholm',
        population: 987_661, 
        state: 'NSW', 
        founded: 'null null 1252',
        timezone: 'Central European'
    
};
// create new city object stockholm 



function printCityValues (city) {

    for (const key in city) {
        if (city.hasOwnProperty(key)) {         // this is basically looking for properties that aren't empty/blank
                                                   // which, in this case, is none of the properties? 

        console.log(key + ':', city[key]);
        }

    }

}
// function should look for key value pairs for the city object 
    // console log key (first value) + ':', city[key] --> "firstvalue: second value" of key valued pairs (I think)

// 'city' w/in function is waiting for an object to be passed into the function 


printCityValues(sydney); 
printCityValues(stockholm); 

//calling the 'printCityValues ()' function to print the key valued pairs of obect 'sydney' and 'stockholm' 