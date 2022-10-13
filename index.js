const express = require('express');
const {json} = require('express');
const connect = require('./src/config/db');
const bookRoutes = require('./src/bookRoutes/router')
require('dotenv').config();


connect();



const app = express();

app.use(json());
app.use('/book', bookRoutes)

app.get('/', (req, res) => {
    res.send('jdjdjdjdj')
})


const PORT = process.env.PORT || 3334;

app.listen(PORT, () => 
    console.log(`server is on ${PORT}`)
)