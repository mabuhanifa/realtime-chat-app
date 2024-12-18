import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const dbUri =
      process.env.MONGODB_URI || "mongodb://localhost:27017/myDatabase";
    const options = {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    };

    const connection = await mongoose.connect(dbUri, options);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};
