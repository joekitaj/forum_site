const pgp = require('pg-promise')();

const connection = 'postgress://localhost:5432/forum';

const database = pgp(connection);

module.exports = database;
