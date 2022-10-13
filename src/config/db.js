const mongoose = require('mongoose');
const {config} = require('dotenv');

config();

async function connect (uri) {
    try {
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL)
        console.log('connected to mongoose')

    } catch (err) {
        console.log('error has happened')
        
    }
}


module.exports = connect;