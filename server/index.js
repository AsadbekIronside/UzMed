import bodyParser from 'body-parser';
import express from 'express';
import { Server } from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import rautes
import mainRouter from './routers/mainRouter.js';
import authRouter from './routers/authRouter.js';
const app = express();
const http = new Server(app);
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
//auth router
authRouter(app);
//main Router
mainRouter(app);
http.listen(8000, () => {
    console.log("Ishlavotti server");
});
