const mongoose = require('mongoose');

const netbd = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('la base de datos de jwl a sido conectada con éxito')
    } catch (error) {
        console.error(error)
    }
}

module.exports = netbd; 