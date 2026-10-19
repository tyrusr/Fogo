const sanitizeHtml = require('sanitize-html');

const sanitizeListingInput = (listing) => {

    const sanitizedListing = {
        ...listing,
        name: sanitizeHtml(listing.title, { allowedTags: [] }),
        description: sanitizeHtml(listing.description, { allowedTags: [] }),
    };

    return sanitizedListing;
};

module.exports = sanitizeListingInput;