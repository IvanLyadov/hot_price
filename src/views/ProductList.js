import React from 'react';
import { Card, CardTitle, Col, Row } from 'reactstrap';

class ProductList extends React.Component {
 //  constructor(props, context) {
 //   super(props, context);
 // }

  render() {
    let {data} = this.props;

    return (

          data && data.map((obj, index) => {
            return(
              <Row key={index} className="no-gutters sct_product_wrapper">
                <Col xs="12" md="12" lg="4">
                  <Card className="cst_card content_crt_bg" body inverse color="primary">
                    <CardTitle className="thumbnail-title">
                      {
                        obj.title
                      }
                    </CardTitle>

                      {
                        obj.new_used === 'new' ?
                        (
                          <CardTitle className="thumbnail-state">NOWY</CardTitle>
                        )
                         : null
                      }

                    <img className="product-img" alt="product" src={`https://www.ssangyong.pl/konfigurator-images/images/${obj.params.model.toLowerCase()}/${obj.params.my}/colors/cars/${obj.params.color.toLowerCase().replace(' ', '_')}.png`}></img>
                  </Card>
                </Col>
                <Col xs="12" md="12" lg="5">
                  <Card className="cst_card product-desc-section" body>
                    <CardTitle className="product-full-title">
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
                <Col xs="12" md="12" lg="3">
                  <Card className="cst_card cst_card_prise_section" body inverse>
                  <div className="prise_item_wrapper prise_item_one">
                    <Row>
                      <Col xs="6">
                        <span className="price-titles">
                          Cena bazowa
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.srp}}></span>
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
                      </Col>
                    </Row>
                  </div>
                  <div className="prise_item_wrapper prise_item_two">
                    <Row>
                      <Col xs="6">
                        <span className="price-titles">
                          Rabat
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.discount}}></span>
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
                      </Col>
                    </Row>
                  </div>
                  <div className="prise_item_wrapper prise_item_three">
                    <Row>
                      <Col xs="6">
                        <span className="price-titles">
                          Goraca cena
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.hot_price}}></span>
                        <span className="price-items" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
                      </Col>
                    </Row>
                  </div>
                  <div className="prise_item_wrapper prise_item_four">
                    <Row>
                      <Col>
                        <a href={`mailto:${obj.dealer_email}`} className="send-message-btn" >Zapytaj</a>
                      </Col>
                    </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
            );
          })
    );
  }

};

export default ProductList;
