import bodyParser from 'body-parser';
import express from 'express';
import { Server } from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import rautes
import mainRouter from './routers/mainRouter.js';
import authRouter from './routers/authRouter.js';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
const app = express();
const http = new Server(app);
const rateLimiter = new RateLimiterMemory({
    points: 10,
    duration: 1
});
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
const rateLimiterMiddleware = (req, res, next) => {
    var ip;
    req.ip ? ip = req.ip : ip = '0';
    rateLimiter.consume(ip)
        .then(() => { next(); })
        .catch(() => {
        res.status(429).send('Too many requests');
    });
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(rateLimiterMiddleware);
//auth router
authRouter(app);
//main Router
mainRouter(app);
http.listen(8000, () => {
    console.log("Ishlavotti server");
});
