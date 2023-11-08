import { Application } from 'express';
import { sendCode, sendName, sendSms } from '../controllers/authController.js';

const authRouter = (app:Application) => {
    app.post('/auth/send-sms', sendSms);
    app.post('/auth/send-code', sendCode);
    app.post('/auth/send-name', sendName);
}

export default authRouter;