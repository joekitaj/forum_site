// Connects to database
const pgp = require('pg-promise')();

// Makes sure to acccess the correct db, either local or on the server
const connection = process.env.DATABASE_URL || 'postgress://localhost:5432/forum';

const database = pgp(connection);

module.exports = database;
