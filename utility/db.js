const mongoose=require("mongoose");
const uri="mongodb+srv://bsaisiddu05:<ANNAM>@annasamarpan.xwhl2a2.mongodb.net/?retryWrites=true&w=majority&appName=Annasamarpan";
// const uri="mongodb://localhost:27017"
const connectDb=async()=>{
    try {
        await mongoose.connect(uri)
        console.log(" data base connected")
        
    } catch (error) {
        console.log("database failure")
        
    }
}
module.exports=connectDb;