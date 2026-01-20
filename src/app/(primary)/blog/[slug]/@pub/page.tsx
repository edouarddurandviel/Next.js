const Pub = async ({ params }: { params: Promise<{ article: string }> }) => {
  const { article } = await params;

  return (
    <div>
      <h1>Publicité {article}</h1>
    </div>
  );
};

export default Pub;
