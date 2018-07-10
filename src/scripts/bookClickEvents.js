const $ = require("jquery");
const bookForm = require("./bookFormBuilder");
const bookDatabaseHandler = require("./bookDatabaseHandler");
const bookPrinter = require("./bookPrinter")

$("#addBook-btn").on("click", () => {
    bookForm.buildBookForm();
})

//Event Handler for the book form - SUBMIT BUTTON
$("#bookForm-container").on("click", "#save-btn", () => {
    const bookTitleInput = $("#bookTitle-input").val();
    const bookSummaryInput = $("#bookSummary-input").val();
    const bookPagesInput = $("#bookPages-input").val();
    const newBook = {
      title: bookTitleInput,
      summary: bookSummaryInput,
      pages: bookPagesInput,
    //   userID: userData()
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