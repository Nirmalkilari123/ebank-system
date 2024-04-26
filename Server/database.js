const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "knkccbp@A1",
  host: "localhost",
  port: 5432,
  database: "ebank",
});




module.exports = pool;
