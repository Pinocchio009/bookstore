const Books = require('../bookModel/model')

exports.getBooks = async (req, res) => {
    try {
        let books = await Books.find()
        if(books.length === 0)
        return res.status(404).send('No book found');
        res.status(200).json({
            message: 'book found',
            books
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}

exports.createBooks = async (req, res) => {
    try {
        let books = await req.body;
        let created = await Books.create(books);
        if (!created)
        return res.status(400).json({
            success: false,
            message: 'book not found'
        })
        return res.status(200).json({
            success: true,
            message: 'book created',
            books: created,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}

exports.getBook = async( req, res)=> {
    try {
        let id = {_id: req.params.id};
        let books = await Books.findOne(id);
        if(!books) return res.status(404).json({
            message: 'book not found'
        })
        res.status(200).json({
            message: "book found",
            books

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
        }
}

exports.updateBook = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let books = await req.body;
        let update = await Books.findOneAndUpdate(id, books, {new: true})
        if(!update) return res.status(400).json({
            message: 'book not found'
        })
        return res.status(200).json({
            message: 'book updated',
            books: update
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message,
        })
    }
}
exports.deleteBook = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await Books.findOneAndDelete(id)
        if(!deleted) return res.status(400).json({
            message: "book not deleted"
        })
        return res.status(200).json({
            message: 'book deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}