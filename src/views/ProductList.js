import React from 'react';
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

const ProductList = (props) => {
  return (
    <Row className="no-gutters">
      <Col xs="4">
        <Card body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </Col>
      <Col xs="5">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Col>
      <Col xs="3">
        <Card body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductList;
