const { Router } = require("express");
const genreRouter = Router ();

const  {addGenre, getGenreandBooks }  = require ("./controllers");


genreRouter.post("/genre/addgenre", addGenre);
genreRouter.get("/genre/getgenreandbooks/:genre", getGenreandBooks);



module.exports = genreRouter;