const Genre = require("./model");
const Book = require("../books/model");


const addGenre = async (req, res) => {
    try {

        const genre = await Genre.create(req.body);

        res.status(201).json({ message: "success", newgenre: genre });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}



const getGenreandBooks = async (req, res) => {
    try {

        const genre = await genre.findOne({
            where: { genreName: req.parems.genre },
            include: Book,
        });
        console.log(genre);
        res.status(201).json({ message: "success", newgenre: genre });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    };
};




module.exports = {
    addGenre,
    getGenreandBooks,
};
