//Module 3 - JS Intermediate - Question 7
//Garrard Glenn 


// practice using MAP FIND and FILTER 


const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
    ];


// a.) function = getBookTitle(bookId) --> uses FIND --> return the title of the book object w/ matching ID 

function getBookTitle(bookId) {

    const book = books.find(book => book.id === bookId);        // book --> use find() to search books object w/ matching bookId 
                // object.method(argument) -- book => object.property === bookId 
                                            // new value (book) is relying on object.property value (book.id) matching the bookId (argument passed/called into function)
                                                                                // so when you call the function w/ 'getBookTitle(3)' --> '3' is passed as 'bookId' --> '3' is then used to find the corresponding book title to the book w/ id: 3 
                                                                                                                                                                            // 'const book' then assumes the same value (as the corresponding book title)

    return book ? book.title : 'No book with that ID number';   // return book title if bookId matches value in books object --> error message if no matches are found 

}   // end function 

console.log(getBookTitle(3));       // should return '1984' 

console.log(getBookTitle(5));       // should return 'Catcher in the Rye' 



// b.) function = getOldBooks() --> uses FILTER --> return all book objects written before 1950 

function getOldBooks() {

    return books.filter(book => book.year < 1950);    // returns books --> use filter() to search books object for titles published before 1950 
                                                            // simply filtering the original object (books) instead of removing anything or creating any new elements

}   // end function 

console.log(getOldBooks());



// c.) function = addGenre() --> uses MAP --> add genre property to all above books; genre = classic 

function addGenre() {

    return books.map(book => ({     //initiate map function (return -> map of books object)

        ...book,                    //copies all book properties to new map 

        genre: "classic"            // adds genre: classic as a new property to all books 

    })); 

}   // end function 

let classicBooks = addGenre();      // classicBooks is new array created by map function in addGenre() function 

console.log(classicBooks);



// d.) function = getTitles(authorInitial) --> uses MAP and FILTER t/g -> return array of book titles matching 'authorInitial' value

function getTitles(authorInitial) {

    let matchInitial = books.filter(book => book.author[0] === authorInitial);  // create array 'matchInitial' from a filter 
                                                //[0] means first letter of book.author string value, === authorInitial matches that string character to 'authorInitial' 

    return matchInitial.map(book => book.title);    // returns map (new array) of book titles from the filtered list 

    // does this make 'matchInitial' redundant?? 

}   // end function 

console.log(getTitles('F')); 

console.log(getTitles('G')); 


// e.) function = latestBook() -> uses FIND and forEach -> get book w/ most recent publication date 

function latestBook() {

    let latest = null;      // null value --> store most recent book as forEach is used to compare object elements 

    books.forEach(book => {

        if (!latest || new Date(book.published) > new Date(latest.published)) {
            // comparing 'latest' to date of book/publicaiton of elements in books object --> if it is greater than latest.published --> then overwrite 'latest' 

            latest = book;          // 'latest' is overwritten when IF arguments are met 

        } // end if 

    }); // end forEach 


}   // end function 