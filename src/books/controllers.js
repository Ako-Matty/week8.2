const Book = require("./model");

const addBook = async (req, res) => {
    try {
        // const book = await Book.create({
        //     title: req.body.title,
        //     author: req.body.author,
        //     genre: req.body.genre,
        // });

        const book = await Book.create(req.body);

        console.log(book);

        // const successResponse = {
        //     message: "success",
        //     newBook: book,
        // };

        // res.status(201).json(successResponse);

        res.status(201).json({ message: "success", newBook: book });



    } catch ( error ) {
        console.log(error);
        // const errorResponse = {
        //     errorMessage: error.message,
        //     error: error,
        // };
        // res.status(501).json(errorResponse);

        res.status(501).json({ errorMessage: error.message, error: error });
    }
};


const getAllbooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll(req.body);

        res.status(201).json({ message: "Success", getBook: allBooks });


    } catch (error) {
        console.log(error);
        res.status(501).json({ errorMessage: error.message, error: error });
    }

};

const getSingleBookbyTitle = async (req, res) => {
    try {
        const book = await Book.findOne({ where: { title: req.body.title }});
        console.log(book)
        res.status(200).json({ message: "success", book: book });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};


// {
//     "title" : "book4"
//     "newTitle" : "updated title"
// }


const updatebooks = async (req, res) => {
    try {
        const updatebook = await Book.update
            ({ [req.body.updateKey]: req.body.updateValue }, {
                where: {
                    title: req.body.title
                }});

                res.status(501).json({ message: "Success", updatebook });
            }

        catch (error) { 
        
        res.status(201).json({ errorMessage: error.message, error: error });
    };

    console.log()
}




// Testingupdate

// const updateBook = await Book.update (
//     {genre: req.body. newGenre}, 
//     { where: { title: req.body.title } }
// );



const deletebook = async (req, res) => {
    try {
        const result = await Book.destroy({ where: { title: req.body.title } });

        res.status(201).json({ message: "success", result: result })
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });

    }
};

const deleteAllbooks = async (req, res) => {
    try {
        const result = await Book.destroy({ truncate: true })
        res.status(200).json({ message: "success", result: result });
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
};



module.exports = {
    addBook,
    getAllbooks,
    updatebooks,
    deletebook,
    deleteAllbooks,
    getSingleBookbyTitle,
    

};