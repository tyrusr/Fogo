const mongoose = require('mongoose');
//add a new category to keep track of bids or instead go ahead and update highest bid to do so
const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: function (v) {
                return Number.isFinite(v) && /^\d+(\.\d{1,2})?$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid price with up to 2 decimal places`
        }
    },
    highestBid: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
    },
    image: {
        type: String,
        default: '',
    },
    listerRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);