const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.otzzu.mongodb.net/absensi-pegawai?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
try {
    console.log('Databases connection estabilished')
} catch (error) {
    console.log(`Error: Database connection can not be established...!`, error); 
}