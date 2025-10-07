import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Krushna:Krushna7057@cluster0.dmhgtvo.mongodb.net/food-del')
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB Connection Error:", err));
}