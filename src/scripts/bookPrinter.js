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
          $("<input>").attr("type", "checkbox").addClass("checkbox-btn").attr("id", "read").appendTo($bookDiv);
          const $checkboxLabel = $("<label>").attr("for", "read").text("Read?").appendTo($bookDiv);
        //   <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
          $("<button>").text("Delete").addClass("delete-btn").appendTo($bookDiv);
          $("<button>").text("Edit").addClass("edit-btn").appendTo($bookDiv);
          $($bookDiv).appendTo("#bookContainer");
        })
      }
    }
  })

  module.exports = bookPrinter;