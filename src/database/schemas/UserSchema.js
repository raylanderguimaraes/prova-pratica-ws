import { Schema, model, models } from "mongoose";

const UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: true },
});

const User = models.User || model("User", UserSchema);

export default User;
