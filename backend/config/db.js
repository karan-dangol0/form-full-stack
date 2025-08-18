import mongoose from "mongoose";

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongodb is connected");
    } catch (err) {
        console.log("Error connecting to mongodb", err);
        process.exit(1);
   }
}

export default connectToDB;