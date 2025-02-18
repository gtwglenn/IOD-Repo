//Module 3 - JS Intermediate - Question 8
//Garrard Glenn 



const phoneBookABC = new Map();

phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');  


// a.) create phoneBookDEF MAP -> store names beginning w/ D, E, or F 

// b.) Initialise the contents of phoneBookDEF by passing in an array of keys/values 

const phoneBookDEF = new Map([

    ['Danielle', '4543236789'],
    ['Emily', '5452329876'],
    ['Francine', '2324547698']

]);

// c.) Update the phone number for Caroline 

phoneBookABC.set('Caroline', '7873345678');


// d. ) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map 
// e.) Combine the contents of the two individual Maps into a single phoneBook Map 
// f.) Print out the full list of names in the combined phone book


function printPhoneBook(contacts) {

    contacts.forEach((phone, name) => {

        console.log(`${name}: ${phone}`); 

    });

} //end function 


const phoneBook = new Map(phoneBookABC);    // new map w/ phoneBookABC values included 

phoneBookDEF.forEach((phone, name) => {

    phoneBook.set(name, phone);             // adds all phoneBookDEF values to phoneBook 

}); 


console.log("All of the names included in the phonebook:"); 

phoneBook.forEach((phone, name) => {            // for every entry in 'phoneBook' that has a phone and name property --> write the value of the name property 

    console.log(name); 

});







// ALTERNATIVELY -- maybe try combining several steps? not sure if that's what the assignment is asking for


// let phoneBook = new Map();      // phoneBook --> phoneBookABC + phoneBookDEF 

// phoneBookABC.forEach((value, key) => {      // adds all keys + values from phoneBookABC to phoneBook 

//     phoneBook.set(key, value); 

// }); 

// phoneBookDEF.forEach((value, key) => {      // adds all keys + values from phoneBookDEF to phoneBook 

//     phoneBook.set(key, value); 

// });

// console.log(phoneBook);