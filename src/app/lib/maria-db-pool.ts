import mariadb, { PoolConfig } from "mariadb";

const access: PoolConfig = {
  host: "localhost",
  database: "mydb",
  user: "myuser",
  password: "mypassword",
  port: 3307,
  connectionLimit: 5,
  connectTimeout: 10000,
};

const pool = mariadb.createPool(access);

export default pool;
