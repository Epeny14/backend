const express = require('express');
const router = express.Router();
const Formulaire = require('../models/formulaire.model');

// Route pour créer un formulaire
router.post('/', async (req, res) => {
    try {
        const formulaire = new Formulaire(req.body);
        await formulaire.save();
        res.status(201).json({ message: 'Formulaire enregistré avec succès' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement du formulaire' });
    }
});

module.exports = router;