const express = require('express');
const router = express.Router();
const Subscribe = require('../models/subscribe.model');

// Route pour s'abonner à newsletter
router.post('/', async (req, res) => {
    try {
        const subscribe = new Subscribe(req.body);
        await subscribe.save();
        res.status(201).json({ message: 'Vous étes bien inscris à la newsletter' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription à newsletter' });
    }
});

module.exports = router;