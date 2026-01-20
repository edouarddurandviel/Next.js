import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const article = await { title: "Nextjs", content: "Framework" };

  return {
    title: article.title,
    description: article.content,
  };
}

const Default = async ({ params }: { params: Promise<{ article: string }> }) => {
  const { article } = await params;

  return (
    <div>
      <h1>Publicité default: {article}</h1>
    </div>
  );
};

export default Default;
