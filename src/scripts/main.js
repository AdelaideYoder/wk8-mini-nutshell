const $ = require("jquery");
const bookPrinter = require("./bookPrinter");


const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/books")
    .then((books) => {
        bookPrinter.printBooks(books);
    })
}

printOnPageLoad();