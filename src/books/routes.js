const {Router} = require("express")

const bookRouter = Router();

const { addBook } = require ("./controllers")

bookRouter.post("/health/addbook", addBook);

module.exports = bookRouter;