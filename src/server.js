const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')




const app = express();

mongoose.connect('mongodb+srv://deivisson:deivisson@cluster0-lce1u.mongodb.net/Desafio?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(express.json());
app.use(cors())
app.use(routes);



app.listen(3333);
