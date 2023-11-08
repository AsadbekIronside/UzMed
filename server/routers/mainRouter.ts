import { Application, Response, NextFunction, Request } from "express";
import { getUserData } from "../controllers/mainController.js";

const mainRouter = (app:Application) => {

  function isUserAllowed(req:Request, res:Response, next:NextFunction) {

    if (req.cookies['user']) {
      next();
    }
    else { res.redirect('/error-500'); }
  }
  // session middle
  // app.use(isUserAllowed);

  app.get('get-user-data', (req:Request, res:Response) => {
    console.log(req);
    
    console.log("Ko't");
  });
}

export default mainRouter;