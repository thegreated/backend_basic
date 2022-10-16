const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const ListingRoute = require('./routes/listing')
const AuthRoute = require('./routes/auth')


const server = () =>{

    mongoose,mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology:true})
    const db = mongoose.connection

    db.on('error', (err) =>{
        console.log(errr)
    })

    db.once('open', () =>{
        console.log('Db Connection Establish')
    })

    const app = express()

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    const PORT = process.env.port || 3000

    app.listen(PORT , () =>{
        console.log(`Server is running on port ${PORT}`);
    })

    app.use('/api/listing' , ListingRoute)
    app.use('/api', AuthRoute)

}

module.exports = server;