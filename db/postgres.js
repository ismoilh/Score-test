const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "score-test",
  host: "db",
  port: "5432",
});

module.exports = pool;
