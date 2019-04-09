import React from 'react';
import PageNavigation from './Nav';
import LeftMenu from './LeftMenu';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

class Main extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
    };
  }

  render() {
    let {data, model} = this.props.data;

    return (
      <Container>
        <Row>
          <Col>
            <PageNavigation/>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="3">
            <LeftMenu model={model} />
          </Col>
          <Col xs="6" sm="9">
            <ProductList data={data} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
