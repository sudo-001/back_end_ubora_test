const express = require('express');
const path = require('path');
const ContactRouter = require('./routes/Contact');

// const foodRoutes = require("./routes/food");
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();


module.exports = mongoose.connect('mongodb+srv://ubora:ubora@clusterannuaireubora.forh8pp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Accueil backend');
    next();
})

// Gestion de l'erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin , X-Requested-width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes de gestion des Contacts
app.use('/api/contact', ContactRouter)


module.exports = app;