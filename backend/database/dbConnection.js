import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables

export const dbConnection = () => {
    console.log(process.env.MONGO_URI); // Log the Mongo URI for debugging
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "RESTAURANT",
        })
        .then(() => {
            console.log("Connected to database successfully!");
        })
        .catch((err) => {
            console.log(`Some error occurred while connecting to database! ${err}`);
        });
};
