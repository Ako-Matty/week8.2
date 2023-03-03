const { Router } = require("express")

const bookRouter = Router();

const { addBook, updatebooks, deletebook, deleteAllbooks } = require ("./controllers")
const { getAllbooks, getSingleBookbyTitle } = require("./controllers")

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getbooks", getAllbooks)
bookRouter.get("/books/getsinglebook", getSingleBookbyTitle)
bookRouter.put("/books/putbook", updatebooks)
bookRouter.delete("/books/deletebook", deletebook)
bookRouter.delete("/books/deleteAllbooks", deleteAllbooks)



module.exports = bookRouter;