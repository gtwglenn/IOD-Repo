const book = {

    "title": "My Book",
    "author": "John Doe",
    "description": "A book about the Doe family",
    "numPages": 250,

};

console.log(book.title);
console.log(book.author);
console.log(book.description);
console.log(book.numPages);

console.log(book);


book.description = "This is a different description"; 
console.log(book.description); 

//5 book array ??? 
const books = [book, book, book, book, book]
console.log(books); 