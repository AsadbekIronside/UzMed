import { get_user_data } from "../models/main_crud.js";
export async function getUserData(req, res) {
    console.log('awsaesfsfcs');
    try {
        console.log('type of ' + typeof req.cookies);
        const id = parseInt(req.cookies['user']['id']);
        const result = await get_user_data(id);
        if (result[0]) {
            console.log('result[0] = ' + result[0]);
            res.json({ ok: true, result: result[0] });
        }
        else {
            console.log('result = ' + result[0]);
            res.json({ ok: false });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ ok: false });
    }
}
