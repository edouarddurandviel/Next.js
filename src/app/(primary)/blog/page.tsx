import { getAllArticleSorts, getStats } from "@app/services/blog/data/articles";
import { Metadata } from "next";
import Link from "next/link";
import { ListArticle, ListArticleH1, ListArticleMain, ListArticleP } from "./styles";

export async function generateMetadata(): Promise<Metadata> {
  // SEO purpose
  const stats = await getStats();
  return {
    title: stats.title,
    description: stats.description,
  };
}

const Blog = async () => {
  const shorts = await getAllArticleSorts();

  return (
    <ListArticleMain>
      <h1>Blog archives</h1>
      {shorts &&
        shorts.map((short) => (
          <ListArticle key={short.id}>
            <ListArticleH1>{short.title}</ListArticleH1>
            <ListArticleP>{short.short}</ListArticleP>
            <Link href={`/blog/${short.slug}`}>View</Link>
          </ListArticle>
        ))}
    </ListArticleMain>
  );
};

export default Blog;
