const mongoose = require('mongoose')

const ProjetSchema = mongoose.Schema({
    nom: {type: String, required: true},
    description: { type: Text, required: true },
    technoNecessaires: [{ type: String}],
    dateDebut: {type: Date , default: Date.now },
    dateLivraison: { type: Date}
})

module.exports = mongoose.model("Projet", ProjetSchema);