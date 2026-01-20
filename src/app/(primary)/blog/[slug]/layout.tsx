import { Col, Row } from "react-bootstrap";
import { BlogPlaceHolder } from "./styles";

const ArticleLayout = ({
  children,
  pub,
}: Readonly<{
  children: React.ReactNode;
  pub: React.ReactNode;
}>) => {
  return (
    <BlogPlaceHolder>
      <Row>
        <Col md={8}>{children}</Col>
        <Col md={4}>{pub}</Col>
      </Row>
    </BlogPlaceHolder>
  );
};

export default ArticleLayout;
