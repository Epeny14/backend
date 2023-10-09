const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const mongoose = require('mongoose');
const port = 3001;

// connexion à la DB base de données
connectDB();

const app = express();

// Middleware qui permet traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes
app.use("/produit", require("./routes/produit.routes"));
app.use("/chaussures", require("./routes/moments.routes"));
app.use("/search", require("./routes/search.routes"));
app.use("/shoes", require("./routes/shoes.routes"));
app.use("/femme", require("./routes/week.routes"));
app.use("/images", require("./routes/send.routes"));
app.use("/nike", require("./routes/display.routes"));
app.use("/women", require("./routes/women.routes"));
app.use("/kids", require("./routes/article.routes"));
app.use("/enfants", require("./routes/kids.routes"));
app.use("/stuff", require("./routes/image.routes"));
app.use("/children", require("./routes/children.routes"));
app.use("/home", require("./routes/accueil.routes"));
app.use("/basket", require("./routes/basket.routes"));
app.use("/formulaires", require('./routes/formulaire.routes'));
app.use("/t-shirt", require("./routes/tshirt.routes"));
app.use("/newsletter", require("./routes/subscribe.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur à démarré au port " + port));





