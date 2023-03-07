const mongoose = require('mongoose')


mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.log(err);
//     }
// };

// module.exports = connectDB;
