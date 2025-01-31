// MODULE 3 LAB EXERCISES 
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
        console.log(greeting + this.getCatchPhrase(person)); 
    },

    getCatchPhrase(person) { 
        if (person.numFingers == 6){
            return 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'; 
    }   else {
            return 'Nice to meet you.'; 
    } 
} 

}
 
inigo.greeting(westley) 
inigo.greeting(rugen)


// last section of #6 // 

const getCatchPhrase = (person) =>  (numFingers == 6) ? 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.' : 'Nice to meet you.';

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

    // fouls and score categories confuse me because I don't know how you would separate HOME from AWAY team categories/property values

    fouls: 0,
    
    personalFoul() {
        this.fouls++; 
        // +1 to fouls per personal foul 
        return this; 

    },

    
}




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


for (const key in sydney) {
    if (sydney.hasOwnProperty(key)) {

        console.log(key, sydney[key]);
    }

}


const stockholm = {

//987,661
    name: 'Stockholm',
    population: 987661, 
    state: 'NSW', 
    founded: 'null null 1252',
    timezone: 'Central European'

}

for (const key in stockholm) {

    if (stockholm.hasOwnProperty(key)) {

        console.log(key, sydney[key]);
    }
}




/* 
    9.) 


*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; 

let moreSports = teamSports; // ?? 

teamSports.push('Soccer', 'Basketball');
teamSports.unshift('Football');  
console.log(teamSports);

let dog2 = dog1 // --> 9b. new value?? check slides? 
let cat2 = cat1 // --> change name value 

dog2.changeAThing('Bongo');
cat2.fkadfh('Chonkus'); 
// cat2 should become { name: Chonkus, breed: Siberian }

console.log(dog2, cat2); 







