import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("db connected ☑️");
  } catch (err) {
    console.log(`mongo error : ${err}`);
  }
};

export default connectDb;
