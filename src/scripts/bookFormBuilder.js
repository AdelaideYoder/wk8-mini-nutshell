const $ = require("jquery")

//Build the book input form
const bookForm = Object.create({}, {
    buildBookForm: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "bookForm");
            $("<input>").attr("id", "bookTitle-input").attr("placeholder", "Book Title").appendTo($formDiv);
            $("<input>").attr("id", "bookSummary-input").attr("placeholder", "Summary").appendTo($formDiv);
            $("<input>").attr("id", "bookPages-input").attr("placeholder", "Number of Pages").appendTo($formDiv);
            $("<button>").attr("id", "save-btn").text("Save Book").appendTo($formDiv);
            $formDiv.appendTo($("#bookForm-container"))
        }
    }
})



module.exports = bookForm;