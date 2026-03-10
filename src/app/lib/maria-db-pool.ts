import mariadb, { PoolConfig } from "mariadb";

declare global {
  var mariadbPool: mariadb.Pool | undefined;
}

const config = process.env.NODE_ENV.toString() === "development" ? 
{
  host: "localhost",
  database: "mydb",
  user: "myuser",
  password: "mypassword",
  port: 3307,
  connectionLimit: 20,
  acquireTimeout: 10000,
  idleTimeout: 30000,
  multipleStatements: false
} : {
  host: (process.env.DB_HOST || "mariadb"),
  database: process.env.MARIADB_DATABASE!,
  user: process.env.MARIADB_USER!,
  password: process.env.MARIADB_PASSWORD!,
  connectionLimit: 20,
  acquireTimeout: 10000,
  idleTimeout: 30000,
  multipleStatements: false
}


const access: PoolConfig = config;

let pool: mariadb.Pool | null = null

export function getPool(): mariadb.Pool {
  if (!pool) {
   
        pool = mariadb.createPool(access)
   
  }

  return pool
}
