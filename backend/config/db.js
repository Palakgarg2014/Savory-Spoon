import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://palakgarg1308:GXMRPLegGSml112X@cluster0.kv1ph.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    // mongodb+srv://palakgarg1308:GXMRPLegGSml112X@cluster0.kv1ph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.