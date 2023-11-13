import axios from 'axios';
import { config } from 'dotenv';
import { Request, Response} from 'express';
import { check_num_exists, post_user_data } from '../models/auth_crud.js';
import FormData from 'form-data';

config();

var randomCode:number;
var phoneNumber:string;

export async function sendSms (req:Request, res:Response){

    try {   
        randomCode = Math.floor(Math.random()*90000)+10000;
        phoneNumber = req.body.to;

        var data = new FormData();

        data.append('mobile_phone', phoneNumber);
        data.append('from', 'UzMed');
        data.append('message', 'Xayrli kun!\nCode - '+randomCode);

        await axios({
            method:"post",
            url:'https://notify.eskiz.uz/api/message/sms/send',
            maxBodyLength:Infinity,
            headers:{
                Authorization:`Bearer ${process.env.TOKEN}`
            },
            data:data
        })
        .then(respon => {
            console.log(JSON.stringify(respon.data));
            res.json({ ok:true });
        })
        .catch(err => {
            console.log(err);
            res.json({ ok:false });            
        });
        // console.log('inside sendsms');
        

    } catch (error) {
        console.log(error);
        res.json({ok:false});
    }
}

export async function sendCode (req:Request, res:Response){

    try {
        const code = parseInt(req.body.code);
        if(code === randomCode){
            const result = await check_num_exists(phoneNumber);  
            // console.log(result);   
            if(result[0]){
                console.log(result[0]);
                res.cookie('user', JSON.stringify(result[0]),{
                    maxAge:30*24*60*60*1000
                });
                // console.log(JSON.stringify(req.cookies));
                res.json({isMatched:true, ok:true, result:true, user:result[0]});
            }
            else res.json({isMatched:true, ok:true, result:false});
        }else{
            res.json({ok:true, isMatched:false});
        }
        
    } catch (error) {
        console.log(error);
        res.json({ok:false});
    }

}

export async function sendName (req:Request, res:Response){
    
    try {
        const f_name = req.body.f_name;
        const l_name = req.body.l_name;
        
        const result = await post_user_data(f_name, l_name, phoneNumber);
        
        if(result[0]){
            res.cookie('user', result[0],{
                maxAge:30*24*60*60*1000,
                httpOnly:false
            }).json({ ok:true });
        }
        else
            res.json({ ok:false });
    } catch (error) {
        console.log(error);
        res.json({ ok:false });
    }

}