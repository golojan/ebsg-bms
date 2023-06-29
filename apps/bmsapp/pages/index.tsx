import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AddBox from 'all/add-box/add-box';

export function Index() {
  return (
    <Row>
      <Col className="tw-bg-red-500" xs={12} md={6} lg={6}>
        <h1>Index</h1>
        <p> This is a test page for EBSG Portal </p>
        <AddBox />
      </Col>
      <Col className="tw-bg-green-500" xs={12} md={6} lg={6}>
        <h1>Index</h1>
        <p> This is a test page for EBSG Portal </p>
      </Col>
    </Row>
  );
}

export default Index;
