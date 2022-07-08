const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    nom: { type: String, required: true},
    prenom: {type: String},
    telephone: {type: String, required: true},
    email: {type: String, required: true},
})

module.exports = mongoose.model('Contact', ContactSchema);