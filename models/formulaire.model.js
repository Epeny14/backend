const mongoose = require('mongoose');

const formulaireSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    message: String,
});

module.exports = mongoose.model('Formulaire', formulaireSchema);