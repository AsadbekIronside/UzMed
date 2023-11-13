import { Application } from "express";
import { deleteUser, getUserData } from "../controllers/mainController.js";

const mainRouter = (app:Application) => {

  app.get('/get-user-data', getUserData);
  app.delete('/delete-user', deleteUser);

}

export default mainRouter;