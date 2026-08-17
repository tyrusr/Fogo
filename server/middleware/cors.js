const cors = require('cors');

const useCors = {
    origin: 'http://localhost:3000',
    credentials: true
}

module.exports = () => cors(useCors);