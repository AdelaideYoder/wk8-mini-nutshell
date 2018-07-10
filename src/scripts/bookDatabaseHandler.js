const $ = require("jquery");

const bookDatabaseHandler = Object.create({}, {
    postBook: {
        value: (newTaskObject) => {
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: newTaskObject
            })
        }
    },
    getAllBooks: {
        value: () => {
            return $.ajax("http://localhost:3000/books")
        }
    },
    getBook: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "GET"
            })
        }
    },
    putBook: {
        value: (updateBook) => {
            console.log("database", updateBook)
            return $.ajax({
                url: `http://localhost:3000/tasks/${updateBook.id}`,
                method: "PUT",
                data: {
                    name: updateBook.name,
                    details: updateBook.details,
                    date: updateBook.date,
                    userID: updateBook.userID
                }
            })
        }
    },
    deleteBook: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/books/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = bookDatabaseHandler