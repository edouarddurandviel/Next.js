import mariadb, { PoolConfig } from "mariadb";

declare global {
  var mariadbPool: mariadb.Pool | undefined;
}

const access: PoolConfig = {
  host: "mariadb",
  database: process.env.MARIADB_DATABASE,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  port: 3307,
  connectionLimit: 5,
  connectTimeout: 10000,
};

let pool: mariadb.Pool | null = null

export function getPool(): mariadb.Pool {
  if (!pool) {
   
        pool = mariadb.createPool(access)
   
  }

  return pool
}
