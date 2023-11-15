import { delete_user, get_user_data } from "../models/main_crud.js";
export async function getUserData(req, res) {
    try {
        const id = parseInt(JSON.parse(req.cookies['user'])['id']);
        const result = await get_user_data(id);
        if (result[0]) {
            // console.log('result[0] = '+result[0]);
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
export async function deleteUser(req, res) {
    try {
        // console.log('user = '+ typeof req.cookies['user']);
        const id = parseInt(JSON.parse(req.cookies['user'])['id']);
        const result = await delete_user(id);
        res.json({ ok: result });
        if (result)
            console.log('user deleted successfully');
    }
    catch (error) {
        console.log(error);
        res.json({ ok: false });
    }
}
