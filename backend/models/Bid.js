const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    bidder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    bidAmount: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: function (v) {
                return Number.isFinite(v) && /^\d+(\.\d{1,2})?$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid price with up to 2 decimal places`
        }
    }
});


module.exports = mongoose.model('Bid', bidSchema);