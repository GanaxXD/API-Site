const mongoose = require('mongoose');

const {Schema} = mongoose;

//modelando o banco de dados
const TestSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('test', TestSchema);