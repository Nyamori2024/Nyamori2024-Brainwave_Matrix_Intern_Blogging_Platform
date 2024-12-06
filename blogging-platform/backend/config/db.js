const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://math123:Ljl9O08uShzw9d9D@cluster0.kqwmi.mongodb.net/brain_matrix_blogging_platform?retryWrites=true&w=majority&appName=Cluster0');
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
