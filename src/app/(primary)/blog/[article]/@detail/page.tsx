import { Metadata } from 'next';
import Link from 'next/link';


export async function generateMetadata(): Promise<Metadata> {
  const article = await { title: 'article 1', content: 'content' };
  return {
    title: article.title,
    description: article.content,
  };
}

const Article = async ({ params }: { params: Promise<{ article: string }> }) => {
  const { article } = await params;
  const articleContent = await { title: 'article 1', content: 'content' };

  return (
    <main>
      <Link key={1} href='/blog'>
        back
      </Link>
      <h1>Article {article}</h1>
      <p>
        {articleContent.content} {articleContent.title}
      </p>
    </main>
  );
};

export default Article;
