"use client";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  // fetch or get post information
  const article = await { title: "article 1", content: "content" };

  return {
    title: article.title,
    description: article.content,
  };
}

const Default = async ({ params }: { params: Promise<{ article: string }> }) => {
  const { article } = await params;
  const articleContent = await { title: "article 1", content: "content" };

  // type Article = {
  //   id: string;
  //   title: string;
  //   description: string;
  // }

  // requetes
  // const id: string = 'fqd46545sdfdf';
  // const token: string = 'qdsfd4656fqsdf5qs4d6f464f';
  // const fetcher = ([id, token]) => getById(id, token);
  // const { data, error, isLoading } = useSWR<Article, Error>([`/api/blog/article/${id}`, token], fetcher,
  // 	{
  //     refreshInterval: 1000, // reload
  //   }
  // )

  // const fetcher = (...args) => fetch(
  //   'http://localhost:3000',

  // ).then(res => res.json())
  // const { data, error, isLoading } = useSWR<Article, Error>([`/api/blog/article/${id}`, token], fetcher,
  // 	{
  //     refreshInterval: 1000, // reload
  //   }
  // )

  return (
    <main>
      <Link key={1} href="/blog">
        back
      </Link>
      <h1>Article {article}</h1>
      <p>
        {articleContent.content} {articleContent.title}
      </p>
    </main>
  );
};

export default Default;
