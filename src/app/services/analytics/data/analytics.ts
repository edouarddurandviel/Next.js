import { dbQuery, transaction } from 'edouard/lib/db';
import pool from 'edouard/lib/maria-db-pool';
import { Statistiques } from 'edouard/types/types';

type Stat = {
  id: number;
  name: string;
  country: string;
  description: string;
  title: string;
};

export const getStats = async (): Promise<Stat[]> => {
  return [
    { id: 1, title: 'title', description: 'description', name: 'Edouard', country: 'fr' },
  ] as Stat[];
};

export const getAllStatistiques = async (): Promise<Statistiques[]> => {
  try {
    const response = (await dbQuery('SELECT * FROM statistiques')) as Statistiques[];
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOneStatistic = async (data: { id: string }): Promise<Statistiques[]> => {
  const id = Number(data.id);
  const response = (await dbQuery('SELECT * FROM statistiques WHERE id = ?', [id])) as Statistiques[];
  return response;
};

export const getStatsFiltered = async (data: {
  country: string;
  name: string;
}): Promise<Statistiques[] | undefined> => {
  const { country, name } = data;

  // full transaction
  let conn = await pool.getConnection();

  try {
    const res = await transaction(async (conn) => {
      await conn.query('UPDATE statistiques SET title = ?', [name]);
      const result = (await conn.query('SELECT * FROM statistiques WHERE name = ?', [
        name,
      ])) as unknown as Statistiques[];
      return result;
    });
    return res;
  } catch (error) {
    await conn.rollback();
  } finally {
    await pool.end();
  }
};
