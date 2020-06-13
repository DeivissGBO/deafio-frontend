const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    /*
        -Nome
        -Telefone
        -Idade    -> nao seria mlh data de nascimento ?

    */
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    idade: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;