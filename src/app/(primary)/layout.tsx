import Header from "@app/components/Header";
import scss from "./layout.module.scss";
import Footer from "@app/components/Footer";

const DashbordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className={scss.placeHolder}>{children}</div>
      <Footer />
    </>
  );
};

export default DashbordLayout;
