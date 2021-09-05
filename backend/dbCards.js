import mongoose from "mongoose";

const cardShema= mongoose.Schema({
name:String,
imageUrl:String

})

export default mongoose.model('Cards',cardShema);