const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    nom: { type: String, required: true},
    prenom: {type: String},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
    taches: {type: String},
    projets: {type: String}
})

module.exports = mongoose.model('Contact', ContactSchema);