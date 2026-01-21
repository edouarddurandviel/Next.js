import AsideMenu from "@app/components/AsideMenu";
import { Col, Row } from "react-bootstrap";
import { Suspense } from "react";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Row>
      <Col md={3}>
        <AsideMenu />
      </Col>
      <Col md={9}>
        <Suspense>{children}</Suspense>
      </Col>
    </Row>
  );
};

export default BlogLayout;
