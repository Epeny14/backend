const mongoose = require("mongoose");

const momentSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        url: {
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
        // author: {
        //     type: String,
        //     required: true
        // },
        likers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('homme-moment', momentSchema);