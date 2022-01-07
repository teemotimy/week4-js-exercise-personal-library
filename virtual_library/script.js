/* JavaScript Exercise: Personal Library! Week 4 - Day 18 */

//create a class of books with author, title, genre and date

class Book {
    constructor(author, title, genre, date, remarks){
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.date = date;
        // this.remarks = remarks;
    }
}


class Library {
    constructor(){
        this.bookCount = 0
        this.numBookRead = 0;
        this.numBookNotRead = 0;
        this.nextBook = null;   //initially null, because there is/are no next book
        this.currentBook = null;
        this.lastBookRead = null;
        this.books = []         // an empty array of books
    }


    // these are the methods

    add(book){
        this.books.push(book);
    }

    finishCurrentBook(){
        const books = this.books
        this.bookCount = this.books.length
        this.currentBook = books[books.length - 2]
        this.lastBookRead =  books[books.length - 3]
        this.nextBook = books[books.length - 1]


        this.numBookRead = books.indexOf(this.currentBook)
        this.numBookNotRead = this.bookCount - books.indexOf(this.currentBook) - 1
    }


}

const libraryOne = new Library();

const bookOne = new Book("Teemo", "Awesome Book", "Comedy", "01/01/2012");
const bookTwo = new Book("Timy", "Cool Book", "Horror", "01/01/2013");
const bookThree = new Book("Collins", "Great Book", "Fantasy", "01/01/2014");
const bookFour = new Book("Arthur", "Science Book", "SciFi", "01/01/2002");
const bookFive = new Book("Leni", "Math Book", "Mathematics", "01/01/2002");
const bookSix = new Book("Marco", "English Book", "Language", "01/01/2002");
const bookSeven = new Book("Sam", "Cooking Book", "Cook", "01/01/2002");
const bookEight = new Book("Nics", "Sports Book", "Sports", "01/01/2002");

libraryOne.add(bookOne)
libraryOne.add(bookTwo)
libraryOne.add(bookThree)
libraryOne.add(bookFour)
libraryOne.add(bookFive)
libraryOne.add(bookSix)
libraryOne.add(bookSeven)
libraryOne.add(bookEight)

libraryOne.finishCurrentBook()
console.log(libraryOne);