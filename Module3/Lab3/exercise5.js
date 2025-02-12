//Module 3 - JS Advanced - Question 5
//Garrard Glenn 


// The problem with the function is that it makes use of template literals that use 'this' to refer to the object: car. 
    // Using setTimeout with this syntax is incorrect; 'this' no longer refers to the car object. 



    let car = { 
        make: "Porsche", 
        model: '911', 
        year: 1964, 
        
        description() { 
            console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
        } 
    };
    
    car.description(); 
    
    setTimeout(() => car.description(), 200); 
    
    // Part b) Create a clone and override year
    let carClone = { ...car, year: 2020 };      // creates clone of car object w/ all properties --> overwrite year value -> 2020 

    console.log(carClone);                      // display clone of car object w/ new value 
    
    // Part c) Test if delayed call uses original or new values
    setTimeout(car.description.bind(carClone), 200);        // uses bind() to combine description w/ new values to carClone (since we can't use 'this' here)
    
    // Part d) Using bind to fix `this` context in setTimeout
    setTimeout(car.description.bind(car), 200);             // same as above --> refers to original 'car' object instead of carClone 
    
    // Part e) Change model in clone and test again
    let updatedCar = { ...car, model: '918 Spyder' };       // creates 'updatedCar' -> which is a copy of original 'car' object -> model value changed to: 918 Spyder

    setTimeout(car.description.bind(updatedCar), 200);      // uses bind() to combine description w/ new values to updatedCar object 
    