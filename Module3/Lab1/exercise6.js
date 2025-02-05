//Module 3 - JS Fundamentals - Question 6
//Garrard Glenn 


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
 
inigo.greeting(westley); 
inigo.greeting(rugen);

// now using arrow expression syntax 

const getCatchPhrase = (person) =>  (numFingers === 6) ? 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.' : 'Nice to meet you.';

    // condition ? ifTrue : ifFalse; 
    // how do add greeting? 