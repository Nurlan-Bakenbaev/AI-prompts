import mongoose from "mongoose";
let isConnected = false;
export const connectTODB = async () => {
  mongoose.set("strictQuery",true);
};
 if(isConnected){
    
 }