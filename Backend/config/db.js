const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://localhost:27017/todolist';

const connectDB = async () => {
    try {
        console.log(`MongoDB URI: ${DATABASE_URL}`);
        
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4,
        });

        console.log('MongoDB connected successfully');

        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected. Reconnecting in 5 seconds...');
            setTimeout(connectDB, 5000);
        });

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

// Initialize connection
connectDB();

module.exports = mongoose;
