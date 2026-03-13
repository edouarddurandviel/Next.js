import { getAllArticlesSorts, getStats } from "@app/lib/queries/articles";
import { Metadata } from "next";
import {
  ListArticle,
  ListArticleH1,
  ListArticleMain,
  ListArticleP,
  ListArticleLink,
  ListArticleImage,
} from "./styles";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  // SEO purpose
  const stats = await getStats();
  return {
    title: stats.title,
    description: stats.description,
  };
}

const Blog = async () => {
  const shorts = await getAllArticlesSorts();

  return (
    <ListArticleMain>
      <h1>Blog archives</h1>
      {shorts &&
        shorts.map((short) => (
          <ListArticle key={short.id}>
            <ListArticleImage
              src="https://placehold.co/600x400/ff5e5b/white"
              alt={short.title}
              width={60}
              height={40}
              unoptimized
            />
            <ListArticleH1>{short.title}</ListArticleH1>
            <ListArticleP>{short.short}</ListArticleP>
            <ListArticleLink href={`/blog/${short.slug}`}>View page</ListArticleLink>
          </ListArticle>
        ))}
    </ListArticleMain>
  );
};

export default Blog;
