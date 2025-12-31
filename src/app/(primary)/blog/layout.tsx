import AsideMenu from 'edouard/components/AsideMenu';
import scss from './[article]/blog.module.scss';

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AsideMenu />
      <div className={scss.BlogContainer}>{children}</div>
    </>
  );
};

export default BlogLayout;
