import mongoose from "mongoose";



const mongoConnection = ()=>{

    mongoose.connect('mongodb://localhost:27017/workshopMongoose').then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log(err);
    })
}

export default mongoConnection