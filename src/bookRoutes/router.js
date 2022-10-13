const router = require('express').Router();
const controller = require('../bookController/controller');


router
    .get('/', controller.getBooks)
    .post('/', controller.createBooks)
    .get('/:id', controller.getBook)
    .put('/:id', controller.updateBook)
    .delete('/:id', controller.deleteBook);


module.exports = router;