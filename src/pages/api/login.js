import database from "@/database/database";
import userController from "@/database/controllers/UserController";

export default async function handler(req, res) {
  const response = await userController
    .login(req.body)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json(response);
}
