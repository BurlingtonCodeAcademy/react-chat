const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/messages');
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))