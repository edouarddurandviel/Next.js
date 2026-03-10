import { Metadata } from "next";
import Image from 'next/image';
import { ListArticleH1 } from "../styles";
import { getArticleContent } from "@app/services/blog/data/articles";
import { ArticleBody, LinkBack, ArticleMain } from "./styles";

export const dynamic = 'force-dynamic';

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
    <ArticleMain>
      <LinkBack key={1} href="/blog">
        back
      </LinkBack>
      {article && (
        <ArticleBody>
           <Image
              src="https://placehold.co/600x400/ff5e5b/white"
              alt={article.title}
              width={150}
              height={150}
              unoptimized
            />
          <ListArticleH1>{article.title}</ListArticleH1>
          <p>{article.short}</p>
          <p>{article.content}</p>
        </ArticleBody>
      )}
    </ArticleMain>
  );
};

export default Article;
