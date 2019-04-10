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
    let {data, model, filterByModel} = this.props.data;

    return (
      <Container>
        <Row>
          <Col>
            <PageNavigation/>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="3">
            <LeftMenu model={model} filterByModel={filterByModel} />
          </Col>
          <Col xs="12" sm="12" md="12" lg="9">
            <ProductList data={data} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
