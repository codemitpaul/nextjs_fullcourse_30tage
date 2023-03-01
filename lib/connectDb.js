import mongoose from "mongoose";

const dbConnect = () => {
  console.log("MongoDB verbunden");
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.MONGO_URL);
};

export default dbConnect;
