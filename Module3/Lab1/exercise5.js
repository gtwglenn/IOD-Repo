//Module 3 - JS Fundamentals - Question 5
//Garrard Glenn 

// 5.) 

const getGreeting = function(name) {
    // let name = ???
    // name variable is never established so...?
    //console.log('Hello ' + name + '!');
    return `Hello, ${name}!`;
};

// now with different syntax 

const getGreeting = (name) => `Hello, ${name}`; 

                // => console.log(" return 'Hello ' + name + '!' ");
                // *note: use of back ticks instead of single quotes 
