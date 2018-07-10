const $ = require("jquery");

//Print to DOM
const bookPrinter = Object.create({}, {
    printBooks: {
      value: function(bookArray) {
        $("#bookContainer").empty();
        bookArray.forEach((book) => {
          const $bookDiv = $("<div>").attr("id", book.id)
          $("<h4>").text(book.title).appendTo($bookDiv);
          $("<p>").text(book.summary).appendTo($bookDiv);
          $("<p>").text(book.pages).appendTo($bookDiv);
        //   $("<button>").text("Complete").addClass("complete-btn").appendTo($bookDiv);
        //   $("<button>").text("Edit").addClass("edit-btn").appendTo($bookDiv);
          $($bookDiv).appendTo("#bookContainer");
        })
      }
    }
  })

  module.exports = bookPrinter;