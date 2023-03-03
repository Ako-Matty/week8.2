const { Router } = require("express")
const authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getauthorandbooks/:author", getAuthorAndBooks)



module.exports = authorRouter; 