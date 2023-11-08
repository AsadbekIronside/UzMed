import init_db from "./db_init.js";

const knex = init_db();
const users:string = 'tb_users';

const create_users = async():Promise<void> => {
    
    await knex.schema.dropTableIfExists(users);
    
    await knex.schema.createTable(users, (table) => {

        table.increments('id').primary();
        table.string('f_name', 100).notNullable();
        table.string('l_name', 100).notNullable();
        table.string('phone', 20).notNullable();
        table.tinyint('status').defaultTo(1)
        table.timestamp('c_time').defaultTo(knex.fn.now());
        table.timestamp('d_time').nullable();
        table.timestamp('u_time').nullable();

    });
    console.log('Table users was created!');
    
}

(async()=>{
    await create_users();
})();