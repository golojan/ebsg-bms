import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';

export const ReportsMdas: NextPage = () => {
  return (
    <Layout>
      <Row>
        <Col className="xs={12} md={6} lg={6}"></Col>
      </Row>
    </Layout>
  );
};

export default ReportsMdas;
