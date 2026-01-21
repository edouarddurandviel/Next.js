import { dbQuery, transaction } from "@app/lib/db";
import pool from "@app/lib/maria-db-pool";
import { Analitics } from "@app/types/types";

type Stat = {
  id: number;
  name: string;
  country: string;
  description: string;
  title: string;
};

export const getStats = async (): Promise<Stat[]> => {
  return [
    { id: 1, title: "title", description: "description", name: "Edouard", country: "fr" },
  ] as Stat[];
};

export const getAllAnalytics = async (): Promise<Analitics[]> => {
  try {
    const resp = (await dbQuery("SELECT * FROM analytics")) as Analitics[];
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getOneAnalytic = async (data: { id: string }): Promise<Analitics> => {
  const resp = (await dbQuery("SELECT * FROM analytics WHERE id = ?", [data.id])) as Analitics[];
  return resp[0] as Analitics;
};

export const updateOneAnalytic = async (id: string, data: Analitics): Promise<Analitics> => {
  const resp = (await dbQuery("UPDATE analytics SET description = ? WHERE id = ?", [
    data.description,
    Number(id),
  ])) as Analitics[];
  return resp[0] as Analitics;
};

export const updateStatsFiltered = async (data: {
  id: number;
  task: string;
}): Promise<Analitics[] | undefined | unknown> => {
  const { id, task } = data;

  // Full transaction
  ///////////////////
  const conn = await pool.getConnection();

  try {
    const res = await transaction(async () => {
      await conn.query("UPDATE analytics SET task = ?", [task]);
      const result = (await conn.query("SELECT * FROM analytics WHERE id = ?", [
        id,
      ])) as unknown as Analitics[];
      return result;
    });
    return res;
  } catch (error) {
    await conn.rollback();
    return error;
  } finally {
    await pool.end();
  }
};
