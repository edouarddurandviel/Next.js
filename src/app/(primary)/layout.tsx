import { Container } from "react-bootstrap";
import Header from "@app/components/Header";
import Footer from "@app/components/Footer";
import { PlaceHolder } from "@app/styles/template";

const DashbordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container>
      <Header />
      <PlaceHolder>{children}</PlaceHolder>
      <Footer />
    </Container>
  );
};

export default DashbordLayout;
