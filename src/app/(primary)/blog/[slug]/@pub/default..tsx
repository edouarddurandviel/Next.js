import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const article = await { title: "Nextjs", content: "Framework" };

  return {
    title: article.title,
    description: article.content,
  };
}

const Default = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Publicité default: {slug}</h1>
    </div>
  );
};

export default Default;
