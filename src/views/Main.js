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

  componentDidMount(){
    this.setState({

    });
  }



  render() {

    return (
      <Container>
        <Row>
          <PageNavigation/>
        </Row>
        <Row>
          <Col xs="6" sm="3">
            <LeftMenu/>
          </Col>
          <Col xs="6" sm="9">
            <ProductList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
