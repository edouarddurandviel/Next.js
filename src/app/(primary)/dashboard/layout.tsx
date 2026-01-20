import DashboardMenu from "@app/components/DashboardMenu";
import { Suspense } from "react";
import { Col, Row } from "react-bootstrap";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Row>
      <Col md={3}>
        <DashboardMenu />
      </Col>
      <Col md={9}>
        <Suspense>{children}</Suspense>
      </Col>
    </Row>
  );
};

export default DashboardLayout;
