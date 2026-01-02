import scss from "./blog.module.scss";

const ArticleLayout = ({
  children,
  pub,
}: Readonly<{
  children: React.ReactNode;
  pub: React.ReactNode;
}>) => {
  return (
    <>
      <div className={scss.BlogContainer}>{children}</div>
      {pub}
    </>
  );
};

export default ArticleLayout;
