const Author  = require("./model");
const Book = require("../books/model");



// PostAuthor

const addAuthor = async (req, res) => {
    try {

        const author = await Author.create(req.body);

        // const author = {authorName: req.body.authorName} another way.....
        // const newAuthor = await Author.create

        res.status(201).json({ message: "success", newBook: author });
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        
    }
}

// FindAuthors

const getAuthorAndBooks = async (req, res) => {
    try { 
        const author = await Author.findOne({
            where: {authorName: req.params.author }, 
            include: Book,
        });
        console.log(author)
        res.status(200).json({ message: "success", author: author })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};







module.exports = {
    addAuthor,
    getAuthorAndBooks,
};


