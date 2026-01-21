import { dbQuery, transaction } from "@app/lib/db";
import pool from "@app/lib/maria-db-pool";
import { Article, ArticleShort } from "@app/types/types";

export const getStats = () => {
  return {
    title: "Blog list articles",
    description: "List of articles on Lorem ipsum",
  };
};

export const getAllArticlesSorts = async (): Promise<ArticleShort[]> => {
  try {
    const response = (await dbQuery(
      "SELECT a.id, a.title, a.slug, a.short FROM articles a",
    )) as ArticleShort[];
    return response;
  } catch (error) {
    throw error;
  }
};

export const getArticleContent = async (data: { slug: string }): Promise<Article> => {
  try {
    const resp = (await dbQuery("SELECT * FROM articles WHERE slug = ?", [data.slug])) as Article[];
    return resp[0] as Article;
  } catch (error) {
    throw error;
  }
};

export const getOneArticle = async (data: { id: string }): Promise<Article> => {
  const response = (await dbQuery("SELECT * FROM articles WHERE id = ?", [data.id])) as Article[];
  return response[0] as Article;
};

export const updateArticleFiltered = async (data: {
  id: number;
  task: string;
}): Promise<Article[] | undefined | unknown> => {
  const { id, task } = data;

  // Full transaction
  ///////////////////
  const conn = await pool.getConnection();
  try {
    const res = await transaction(async () => {
      await conn.query("UPDATE articles SET task = ?", [task]);
      const result = (await conn.query("SELECT * FROM articles WHERE id = ?", [
        id,
      ])) as unknown as Article[];
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
