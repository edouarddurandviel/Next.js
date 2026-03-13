const Pub = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Publicité page {slug}</h1>
    </div>
  );
};

export default Pub;
