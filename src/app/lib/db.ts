import { PoolConnection } from 'mariadb';
import pool from './maria-db-pool';


export const dbQuery = async (sql: string, params?: any[]) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const [result] = await conn.query(sql, params && params);
    return result;
  } catch (err) {
    console.error('Error fetching users:', err);
  } finally {
    if (conn) conn.release();
  }

};

export const transaction = async (
  callback: (conn: PoolConnection) => Promise<any>,
): Promise<any> => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [results] = await callback(conn);
    await conn.commit();
    return results;
  } catch (err: any) {
    await conn.rollback();
    console.error('dbQuery error: ', err);
    throw err;
  } finally {
    conn.release();
  }
};
