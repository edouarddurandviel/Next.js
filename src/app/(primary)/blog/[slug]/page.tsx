import { Metadata } from "next";
import Link from "next/link";
import { ListArticleH1 } from "../styles";
import { getArticleContent } from "@app/services/blog/data/articles";
import { ArticleBody } from "./styles";

export async function generateMetadata(): Promise<Metadata> {
  const article = await { title: "article 1", content: "content" };
  return {
    title: article.title,
    description: article.content,
  };
}

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = await getArticleContent({ slug });

  return (
    <main>
      <Link key={1} href="/blog">
        back
      </Link>
      {article && (
        <ArticleBody>
          <ListArticleH1>{article.title}</ListArticleH1>
          <p>{article.short}</p>
          <p>{article.content}</p>
        </ArticleBody>
      )}
    </main>
  );
};

export default Article;
