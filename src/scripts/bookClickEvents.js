const $ = require("jquery");
const bookForm = require("./bookFormBuilder");
const bookDatabaseHandler = require("./bookDatabaseHandler");
const bookPrinter = require("./bookPrinter");

$("#addBook-btn").on("click", () => {
    bookForm.buildBookForm();
})

//Event Handler for the book form - SAVE BUTTON
$("#bookForm-container").on("click", "#save-btn", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    const bookSummaryInput = $("#bookSummary-input").val();
    const bookPagesInput = $("#bookPages-input").val();
    const newBook = {
      title: bookTitleInput,
      summary: bookSummaryInput,
      pages: bookPagesInput,
      finished: false
    }
    // console.log("this is the one", userData())
    bookDatabaseHandler.postBook(newBook)
    .then((bookInfo) => {
      console.log("bookInfo",bookInfo)
      $("#bookTitle-input").val("").attr("placeholder", "Book Title");
      $("#bookSummary-input").val("").attr("placeholder", "Summary");
      $("#bookPages-input").val("").attr("placeholder", "Number of Pages");
      return bookDatabaseHandler.getAllBooks()
    })
    .then(bookArray => {
      bookPrinter.printBooks(bookArray)
  })
})

//Event Handler for the book printed on the DOM, when checkbox is clicked
$("#bookContainer").on("click", ".checkbox-btn", () => {
    const bookID = event.target.parentNode.id
    // console.log("show me this", bookID)
})

//Event Handler for book list - DELETE BUTTON
$("#bookContainer").on("click", ".delete-btn", () => {
    const bookID = $(event.target).parent().attr("id")
    bookDatabaseHandler.deleteBook(bookID)
    .then(() => {
      return bookDatabaseHandler.getAllBooks()
    })
    .then((bookArray) => {
      bookPrinter.printBooks(bookArray)
    })
  })