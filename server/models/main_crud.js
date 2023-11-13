import init_db from "../db/db_init.js";
const knex = init_db();
const users = "tb_users";
export async function get_user_data(id) {
    return await knex(users).select(['id', 'f_name', 'l_name', 'phone'])
        .where('status', '=', 1)
        .andWhere('id', '=', id)
        .then(result => result)
        .catch(err => {
        console.log(err);
        return [];
    });
}
export async function delete_user(id) {
    return await knex(users)
        .update({ 'status': 0 })
        .where('id', '=', id)
        .then(result => true)
        .catch(err => {
        console.log(err);
        return false;
    });
}
