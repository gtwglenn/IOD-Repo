// MODULE 3 LAB EXERCISES 
// SEE DIRECTORY FOLDER FOR INDIVIDUAL EXERCISES 
// GARRARD GLENN



// 1.) 

//  PLEASE DON'T GRADE THIS

console.log("" + 1 + 0 )
// '1' 
console.log("" - 1 + 0 )
// '-1' 
console.log(true + false )
// '0?' 
console.log(!true)
// false
console.log(6 / "3" )
// 2??? idk 
console.log("2" * "3" )
// I think it's 23? 
console.log(4 + 5 + "px" )
// 9px 
console.log("$" + 4 + 5 )
// $9
console.log("4" - 2 )
// 2?? or '4 - 2'  
console.log("4px" - 2 )
// "4px-2"
console.log("  -9  " + 5 )
// "-9 + 5" or "-4"
console.log("  -9  " - 5 )
// "-9 - 5" or "-14"
console.log(null + 1)
// 1? 
console.log(undefined + 1 )
// 1? 
console.log(undefined == null)
// null? 
console.log(undefined === null)
// nuuull? 
console.log(" /t /n" - 2)
// 
//  - 2 ? 

console.log('END QUESTION 1');


// 2.) 
console.log( "3" + "4" )
// 34 
// concatenates because of the double quotes -- "3 + 4" would equal "7"
console.log( "3" * "4" )
// 12 ?? 
console.log( "3" / "4" )
// 0.75
console.log( "3" - "4")
// ?? 
// I missed this one because I thought it would concatenate to "3-4"
console.log( "3" < "4" )
// true or 1 
console.log( "30" < "4" )
// false or 0 
// I think this is because 'thirty' and 'four' are not stored as a number,
    // let stores them as values; since 'four' is declared before 'thirty', 
    // 'four' is therefore greater than 'thirty' 
// if it was declared as " *num* four = 4 " && " *num* thirty = 30 "
    //THEN the phrase "30" < "4" would be incorrect/false 


    console.log('END QUESTION 2');



// 4.) += adds to previous value 
    // in the case of this code, it is trying to add a string of letters to 'result' 
        // so that it prints (a value) + (b value) is (greater than/less than - 10)

    // *for ternary ? operator --> condition ? exprIfTrue : exprIfFalse


let a = 2, b = 3; 
let result = `${a} + ${b} is `;
    // an example of when to use backticks 

result += (a + b < 10) ? 'less than 10' : 'greater than 10';
console.log(result);
    // return result? 

    // output = "2 + 3 is less than 10"


// 5.) 

const getGreeting = function(name) {
    // let name = ???
    // name variable is never established so...?
    //console.log('Hello ' + name + '!');
    return `Hello, ${name}!`;
};

const getGreeting = (name) => `Hello, ${name}`; 

                // => console.log(" return 'Hello ' + name + '!' ");
                // *note: use of back ticks instead of single quotes 


// 6.) 

// add lastName property --> include in 'greeting' 

// getCatchPhrase -- IF 'person' arg has 6 fingers --> prints famous catch phrase 
    // see: https://www.imdb.com/title/tt0093779/characters/nm0001597

// getCatchPhrase --> use arrow function syntax && conditional operator 

const westley = { 
    name: 'Westley', 
    numFingers: 5 
}

const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',

    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName+` `+this.lastName}.`; 
        console.log(greeting + ' ' + this.getCatchPhrase(person)); 
    },

    getCatchPhrase(person) { 
        if (person.numFingers === 6) {
            return 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'; 
    }   else {
            return 'Nice to meet you.'; 
    } 
} 

}
 
inigo.greeting(westley) 
inigo.greeting(rugen)


// last section of #6 // 

const getCatchPhrase = (person) =>  (numFingers === 6) ? 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.' : 'Nice to meet you.';

    // condition ? ifTrue : ifFalse; 
    // how do add greeting? 




/* 7.) 
        - modify each method --> chained together (?)
        - add a new method --> print the full time final score
        - add new object property --> track # of fouls, + method to increment it
            - similar, but separate to the score (?)
        -  test object by chaining all method calls t/g in different combinations (?) 


        *confused by factoring Home/Away team totals for each category 

                would it be like awayTeam.freeThrow() --> give away team a point for a free throw ??? 
*/ 

const basketballGame = { 

    score: 0, 
    fouls: 0,

    // fouls and score categories confuse me because I don't know how you would separate HOME from AWAY team categories/property values

    freeThrow() { 
        this.score++; 
        // +1 to score per freeThrow()
        return this;
    }, 

    basket() { 
        this.score += 2; 
        // +2 to (current) score per basket()
        return this;
    }, 

    threePointer() { 
        this.score += 3; 
        // +3 to (current) score per threePointer() 
        return this;
    }, 

    halfTime() { 
        console.log('Halftime score is '+this.score);
            // + foul count 
        console.log('Number of fouls commited: '+this.fouls);
        // prints halfTime score when called  
        return this;
    },

    //new method --> print full time final score 

    fullTime() {
        console.log('The final score is: '+this.score);
            // + foul count 
        console.log('Number of fouls commited: '+this.fouls);
        // prints halfTime score when called  
        return this; 
    },
    
    personalFoul() {
        this.fouls++; 
        // +1 to fouls per personal foul 
        return this; 

    },

    
}

/*                          A   L   T   E   R   N   A   T   I   V   E   L   Y   

            - ADD SEPARATE HOME AND AWAY OBJECTS -> USE METHOD CHAINING FOR HOME/AWAY TEAM STATS            */ 


            const basketballGame = {
                home: {
                    score: 0,
                    fouls: 0,
                    
                    // Method to increase score by 1 (free throw)
                    freeThrow() {
                        this.score++;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 2 (basket)
                    basket() {
                        this.score += 2;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 3 (three-pointer)
                    threePointer() {
                        this.score += 3;
                        return this; // Enable chaining
                    },
                    
                    // Method to increment fouls
                    foul() {
                        this.fouls++;
                        return this; // Enable chaining
                    },
                    
                    // Method to print halftime score for home team
                    halfTime() {
                        console.log(`Home halftime score: ${this.score}, fouls: ${this.fouls}`);
                        return this; // Enable chaining
                    },
                    
                    // Method to print full-time score for home team
                    fullTime() {
                        console.log(`Home full-time score: ${this.score}, fouls: ${this.fouls}`);
                    }
                },
                
                away: {
                    score: 0,
                    fouls: 0,
                    
                    // Method to increase score by 1 (free throw)
                    freeThrow() {
                        this.score++;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 2 (basket)
                    basket() {
                        this.score += 2;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 3 (three-pointer)
                    threePointer() {
                        this.score += 3;
                        return this; // Enable chaining
                    },
                    
                    // Method to increment fouls
                    foul() {
                        this.fouls++;
                        return this; // Enable chaining
                    },
                    
                    // Method to print halftime score for away team
                    halfTime() {
                        console.log(`Away halftime score: ${this.score}, fouls: ${this.fouls}`);
                        return this; // Enable chaining
                    },
                    
                    // Method to print full-time score for away team
                    fullTime() {
                        console.log(`Away full-time score: ${this.score}, fouls: ${this.fouls}`);
                    }
                }
            };
            
            // Example of method chaining for both Home and Away teams:
            basketballGame.home
                .basket()
                .freeThrow()
                .basket()
                .threePointer()
                .foul()
                .halfTime()
                .fullTime();
            
            basketballGame.away
                .freeThrow()
                .basket()
                .foul()
                .threePointer()
                .halfTime()
                .foul()
                .fullTime();






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
        if (city.hasOwnProperty(key)) {

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






/* 
    9.) 


*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = [ 'Bingo', 'Beagle' ]; 
    // SHOULD create array dog1 w/ Bingo and Beagle values 
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; 
    // creates object cat1 w/ 'name' and 'breed' properties 
        // --> do make array w/ properties as values?? 

let moreSports = teamSports; // make new array --> modify new array (other ways to do this)

moreSports.push('Soccer', 'Basketball');
moreSports.unshift('Football');  
console.log(moreSports);
// this much is correct --> array modified to: ["Football","Hockey","Cricket","Volleyball","Soccer","Basketball"]

let dog2 = dog1; 
let cat2 = Object.values(cat1);

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



/*

    10.)

*/


function Person(name, age) { 
    this.name = name; 
    this.age = Number(age); 
    this.human = true; 

    this.canDrive = function() {
        return this.age >= 16;
    };

}

let user1 = new Person('Chumba-Wumba', '372'); 
console.log(user1);
console.log(user1.canDrive());

let user2 = new Person('Skippy', '4208'); 
console.log(user2);
console.log(user2.canDrive());



class PersonClass {

    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
    }

    canDrive() {
        return this.age >= 16;

    }
}

let user3 = new PersonClass('Xarbon', '3000');
console.log(user3);
console.log(user3.canDrive());






// use .JS node to check work 

// .....or at least practice .JS node 




