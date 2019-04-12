import React from 'react';
import { Card, CardTitle, Col, Row } from 'reactstrap';

class ProductList extends React.Component {
  render() {
    let {data} = this.props;

    return (

          data && data.map((obj, index) => {
            return(
              <Row key={index} className={ `no-gutters sct_product_wrapper sct_product_wrapper_${obj.status}`}>
                <div className={ `sct_product_${obj.status}`}></div>
                <Col xs="12" md="12" lg="4">
                  <Card className="cst_card content_crt_bg" body inverse>
                    <CardTitle className="thumbnail-title">
                      <span className="title-bold">
                        {
                          obj.title.substring(0, obj.title.indexOf(" "))
                        }
                      </span>
                      <span>
                        {
                          obj.title.substring(obj.title.indexOf(" "), obj.title.length)
                        }
                      </span>
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
                        <span className="cst_product_desc">
                          Wersja
                        </span>
                      </Col>
                      <Col xs="7">
                        <span className="cst_product_content">
                          {
                            obj.params.model
                          }
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        <span className="cst_product_desc">
                          Rok produkcji
                        </span>
                      </Col>
                      <Col xs="7">
                        <span className="cst_product_content">
                          {
                            obj.params.year
                          }
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        <span className="cst_product_desc">
                          Rok modelowy
                        </span>
                      </Col>
                      <Col xs="7">
                        <span className="cst_product_content">
                          {
                            obj.params.my
                          }
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="5">
                        <span className="cst_product_desc">
                          Wyposizanie
                        </span>
                      </Col>
                      <Col xs="7">
                        <span className="cst_product_content">
                          {
                            obj.params.option
                          }
                        </span>
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
                        <span className="price-currency" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
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
                        <span className="price-currency" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
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
                        <span className="price-currency" dangerouslySetInnerHTML={{__html: obj.params.price.currency}}></span>
                      </Col>
                    </Row>
                  </div>
                  <div className={`prise_item_wrapper prise_item_four prise_item_four_${obj.status}`}>
                    <Row>
                      <Col>
                        {
                          obj.status !== 'sold' ?
                            ( <a href={`mailto:${obj.dealer_email}`} className="send-message-btn disabled" >Zapytaj</a> )
                           :
                           <a className="send-message-btn disabled" >Zapytaj</a>
                        }
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
