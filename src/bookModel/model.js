const {Schema, model} = require('mongoose');

const bookSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
    },
    userRole:{
        type: String,
        enum: ['admin', 'user'],
        default: "not assigned"
    },
    Genre:{
        type: String,
        enum: ['fiction', 'nonfiction'],
        default: "not assigned"
    }
},
{timestamps: true}
)

const bookModel = model ('books', bookSchema);

module.exports = bookModel