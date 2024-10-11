import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://imrozkhan:125795@cluster0.vdj7v.mongodb.net/food-del?retryWrites=true&w=majority').then(()=>console.log("DB connected"));

    
}

