import React from 'react';
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props, context) {
   super(props, context);
 }

  render() {
    let {data} = this.props;

    return (

          data && data.map((obj, index) => {
            return(
              <Row key={index} className="no-gutters sct_product_wrapper">
                <Col xs="4">
                  <Card className="cst_card" body inverse color="primary" style={{backgroundImage: `url()`}}>
                    <CardTitle>
                      {
                        obj.title
                      }
                    </CardTitle>
                    <CardTitle>
                      {
                        obj.new_used
                      }
                    </CardTitle>
                    <img className="product-img" src={`https://www.ssangyong.pl/konfigurator-images/images/${obj.params.model.toLowerCase()}/${obj.params.my}/colors/cars/${obj.params.color.toLowerCase().replace(' ', '_')}.png`}></img>
                  </Card>
                </Col>
                <Col xs="5">
                  <Card className="cst_card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>
                      {
                        `${obj.params.engine_capacity} ${obj.params.fuel_type} ${obj.params.transmission} ${obj.params.gearbox} | ${obj.params.color}`
                      }
                    </CardTitle>
                    <Row>
                      <Col xs="5">
                        Wersja
                      </Col>
                      <Col xs="7">
                        {
                          obj.params.model
                        }
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        Rok produkcji
                      </Col>
                      <Col xs="7">
                        {
                          obj.params.year
                        }
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        Rok modelowy
                      </Col>
                      <Col xs="7">
                        {
                          obj.params.my
                        }
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        Wyposizanie
                      </Col>
                      <Col xs="7">
                        {
                          obj.params.option
                        }
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs="3">
                  <Card className="cst_card" body inverse color="primary">
                  <Row>
                    <Col xs="5">
                      Cena bazowa
                    </Col>
                    <Col xs="7">
                      {
                        obj.params.price.srp
                      }
                      <span>
                        {
                          obj.params.price.currency
                        }
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="5">
                      Rabat
                    </Col>
                    <Col xs="7">
                      {
                        obj.params.price.discount
                      }
                      <span>
                        {
                          obj.params.price.currency
                        }
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="5">
                      Goraca cena
                    </Col>
                    <Col xs="7">
                      {
                        obj.params.price.hot_price
                      }
                      <span>
                        {
                          obj.params.price.currency
                        }
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button color="secondary">Button</Button>
                    </Col>
                  </Row>

                  </Card>
                </Col>
              </Row>
            );
          })


    );
  }

};

export default ProductList;
