import init_db from "../db/db_init.js";

const knex = init_db();
const users = 'tb_users';

export async function check_num_exists(num:string):Promise<object[]>{

    return await knex(users)
    .select(["id", "f_name", "l_name"])
    .where('phone', '=', num)
    .andWhere('status', '=', 1)
    .then(result => result)
    .catch(err => {
        console.log(err);
        return [];
    });

}
export async function post_user_data(f_name:string, l_name:string, phone:string):Promise<any[]>{

    return await knex(users)
    .insert({
        f_name:f_name,
        l_name:l_name,
        phone:phone,
    })
    .returning(["id", "f_name", "l_name"])
    .then(result => result)
    .catch(err => {
        console.log(err);
        return [];
    });

}