import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect(
      "" // URI of your MongoDB Database
    );
    isConnected = true;
  }
};
