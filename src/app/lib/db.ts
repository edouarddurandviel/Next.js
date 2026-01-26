import { PoolConnection } from "mariadb";
import { getPool } from "./maria-db-pool";

export const dbQuery = async (sql: string, params?: unknown[]) => {
  const pool = getPool()
  const connexion = await pool.getConnection();
  try {
    const result = await connexion.query(sql, params && params);
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    if (connexion) connexion.release();
  }
};

export const transaction = async (
  callback: (connexion: PoolConnection) => Promise<unknown>,
): Promise<unknown> => {
    const pool = getPool()
  const connexion = await pool.getConnection();
  try {
    await connexion.beginTransaction();
    const results = await callback(connexion);
    await connexion.commit();
    return results;
  } catch (err: unknown) {
    await connexion.rollback();
    console.error("dbQuery error: ", err);
    throw err;
  } finally {
    connexion.release();
  }
};
