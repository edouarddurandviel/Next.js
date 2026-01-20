import scss from "@app/styles/layout.module.scss";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className={scss.placeHolder}>{children}</div>
    </>
  );
};

export default HomeLayout;
