const mongoose = require('mongoose');
mongoose.connect(process.env.mongodb_url);

const connection = mongoose.connection;

connection.on('error', ()=> {
    console.log('Error To Connect The Database');
});

connection.on('connected', ()=>{
    console.log('Connected Successfully Into DataBase');
});

module.exports = connection;
