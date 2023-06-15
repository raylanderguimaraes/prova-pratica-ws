import User from "../schemas/UserSchema";

import database from "../database";
// CREATE
const saveUser = async (queryUser) => {
  if (!database.connect()) return false;
  const newUser = new User(queryUser);
  return await newUser.save();

  //database.disconnect()
};

const login = async (email, password) => {
  if (!database.connect()) return false;
  const user = {
    email: email,
    password: password,
  };
  const response = await database.collection("users").findOne(user);
  console.log(response);
};


const userController = {
  saveUser,
  login,
 
};

export default userController;
