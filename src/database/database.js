import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const dbname = "myProducts";
const url = `mongodb+srv://raylander360:${process.env.DB_PWD}@cluster0.u5ipjmy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connect = async () => {
  return await mongoose.connect(url);
};

const disconnect = async () => {
  return await mongoose.disconnect(url);
};

const database = {
  connect,
  disconnect,
};

export default database;
