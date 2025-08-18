import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectToDB();
app.use("/api/users", userRoutes);
app.use(errorHandler);
app.get("/api/users", (req, res) => {
    console.log(res.contentType);
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is up on localhost:${PORT}`);
    
});