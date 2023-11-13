import { deleteUser, getUserData } from "../controllers/mainController.js";
const mainRouter = (app) => {
    app.get('/get-user-data', getUserData);
    app.delete('/delete-user', deleteUser);
};
export default mainRouter;
