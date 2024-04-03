import mongoose from "mongoose"
export default async function dbConnect(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}