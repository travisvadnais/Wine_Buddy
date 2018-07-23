const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WineSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    winery: {
        type: String,
        required: false
    },
    url: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    price: {
        type: Schema.Types.Mixed
    },
    country: {
        type: String
    }
});

const Wine = mongoose.model("Wine", WineSchema);
module.exports = Wine;