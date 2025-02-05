//Module 3 - JS Fundamentals - Question 9
//Garrard Glenn 


/* 
    9.) 


*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = [ 'Bingo', 'Beagle' ]; 
    // creates array dog1  
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; 
    // creates object cat1 
        // --> do make array w/ properties as values?? 

let moreSports = teamSports; // make new array --> modify new array (other ways to do this)

moreSports.push('Soccer', 'Basketball');
moreSports.unshift('Football');  
console.log(moreSports);
// this much is correct --> array modified to: ["Football","Hockey","Cricket","Volleyball","Soccer","Basketball"]

let dog2 = dog1; 
let cat2 = Object.values(cat1);
    // have to use Object.values() because cat1 is an object, not an array 

console.log(dog2, cat2);

// create new arrays dog2 & cat2 --> use splice to manipulate arrays 
// use splice to do both at the same time? 
// * can only use splice() on arrays -- cat1 is an object, use different method to change object properties 
    // or find a way to turn cat2 into an array?? 

dog2.splice(0, 2, 'Bongo', 'Doberman');
    //splice --> change values of dog2 = [ 'Bongo', 'Doberman' ]; 
cat2.splice(0, 2, 'Chonkus', 'Jaguar'); 
    //splice --> change values of cat2 = [ 'Chonkus', 'Jaguar' ];


console.log(dog2, cat2); 