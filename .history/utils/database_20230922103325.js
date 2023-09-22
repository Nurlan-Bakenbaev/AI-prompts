import mongoose from "mongoose";
let isConnected = false;
export const connectTODB = async () => {
  mongoose.set("strictQuery",true);
  if(isConnected){
    console.log("MD is connected")
 }
};
