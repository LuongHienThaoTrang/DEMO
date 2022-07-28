import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'reactstrap';
import ImageContainer from './ImageContainer';
import CommonQuantityInput from './CommonQuantityInput';

class Cart extends Component {
    render() {
        return (
            <div>
                <Container className="my-5">
                    <Row>
                        <Col md={9}>
                            <Card className="p-3">
                            <Container fluid>
                                <Row>
                                    <Col md={3}>
                                        <ImageContainer items={"https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver16-0020556/41df38d0-015d-e700-f7d7-0018ac665d36.jpg?w=540&h=756&c=true&ntf=false"} />
                                    </Col>
                                    <Col md={9}>
                                        <h3>{'ABC'}</h3>
                                        <h5 className="text-warning">Price: {2}$</h5>
                                        <CommonQuantityInput />
                                        <Button color="primary" outline>Submit</Button>
                                    </Col>
                                </Row>
                            </Container>
                            </Card>
                        </Col>
                        <Col md={3}>
                            {/* PRODUCT DETAIL {this.props.params.id} */}
                            <Card className="p-3">
                                <h3>Total items: 20</h3>
                                <h4 className="text-warning">Total price: 200$</h4>
                                <Button color="primary">Checkout</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cart;