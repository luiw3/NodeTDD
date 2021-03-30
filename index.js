const express = require('express');
const mongoose = require('mongoose');

const url = `mongodb://db:27017/node_tdd`;

mongoose.connect(url).then( function() {
    console.log('MongoDB is connected on:' + url);
})
.catch( function(err) {
    console.log(err);
});

var Schema = mongoose.Schema;

const Pessoa = new Schema({
    nome: String,
    idade: Number,
},{collection:'pessoas'});

const pessoaModel = mongoose.model('pessoaModel',Pessoa);
// App
const app = express();

app.get('/', async function(req, res) {
    let doc = await pessoaModel.find().lean().exec();
    res.status(200).json(doc[0]);
})

var server = require('http').Server(app);
server.listen('8080');
console.log('Server is up!');

module.exports = server