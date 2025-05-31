import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable inside .env.local");
}

let isConnected = false;

export async function connect() {
  if (isConnected) {
    console.log("✅ Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(MONGO_URL);
    isConnected = true;

    console.log("✅ MongoDB connected successfully.");

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  }
}
