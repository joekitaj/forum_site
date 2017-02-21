const pgp = require('pg-promise')();

const connection = process.env.DATABASE_URL || 'postgress://localhost:5432/forum';

const database = pgp(connection);

module.exports = database;
