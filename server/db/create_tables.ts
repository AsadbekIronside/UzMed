import init_db from "./db_init.js";

const knex = init_db();
const users:string = 'tb_users';
const products:string = "tb_products";

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
const create_products = async():Promise<void> => {

    await knex.schema.dropTableIfExists(products);

    await knex.schema.createTable(products, (table) => {

        table.increments('id').primary();
        table.string('name', 200).notNullable();
        table.string('photo').notNullable();
        table.integer('old_price').nullable();
        table.integer('price').notNullable();
        table.integer('number').notNullable();
        table.string('category').notNullable();
        table.string('data', Infinity).nullable();
        table.integer('number_sold').defaultTo(0);
        table.tinyint('status').defaultTo(1);
        table.timestamp('c_time').defaultTo(knex.fn.now());
        table.timestamp('u_time').nullable();
        table.timestamp('d_time').nullable();

    });
    
    console.log('products table was created!');

}

(async()=>{
    await create_users();
    await create_products();
})();