const mongoose = require("mongoose");

const shirtSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('men-tshirt', shirtSchema);