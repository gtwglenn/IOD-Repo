//Module 3 - JS Fundamentals - Question 10
//Garrard Glenn 



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