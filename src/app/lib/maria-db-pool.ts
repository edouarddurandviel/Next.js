import mariadb, { PoolConfig } from "mariadb";

declare global {
  var mariadbPool: mariadb.Pool | undefined;
}

const access: PoolConfig = {
  host: "localhost",
  database: "mydb",
  user: "myuser",
  password: "mypassword",
  port: 3307,
  connectionLimit: 5,
  connectTimeout: 10000,
};

const pool = global.mariadbPool ?? mariadb.createPool(access);

if (process.env.NODE_ENV !== "production") {
  global.mariadbPool = pool;
}

export default pool;
