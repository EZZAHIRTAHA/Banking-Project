const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
        console.log("Connecting to: mongodb://127.0.0.1:27017 AUTHOR: Taha".yellow.underline.bold);
    } catch (error) {
        console.log(error);
    }
}





module.exports = connectDB