import knex from 'knex';
export default function init_db() {
    const db = knex({
        client: 'mysql2',
        connection: {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "Asadbek0929$",
            database: 'uzmed'
        }
    });
    return db;
}
