const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://agb0030:contrasena123@andrea.tfwwz.mongodb.net/biblioteca';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Detener el proceso en caso de error
    }
};

module.exports = connectDB;
