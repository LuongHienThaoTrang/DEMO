
import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row, Spinner } from "reactstrap";
import ImageContainer from "./ImageContainer";
import CommonQuantityInput from './CommonQuantityInput';
import { connect } from 'react-redux'


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProductDetail extends React.Component {
    state = {
        quantity: 1,
        productDetail: {
            id: null,
            name: '', 
            price: '',
            image: []
        },
        loading: undefined,
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        axios.get(`http://localhost:9696/products/${this.props.params.id}`)
            .then(response => {
                this.setState({
                    productDetail: response.data,
                    loading: false
                })
            })
    }

    handleChangeQuantity = (data, operator = false) => {
        // Khi người dùng không nhập vào input
        if (operator) {
            return this.setState({
                quantity: this.state.quantity + data 
            })
        } 
        // Input do Người dùng nhập
        this.setState({
            quantity: data
        })
    }

    handleAddToCart = () => {
        this.props.addProduct({
            ...this.state.productDetail,
            images: this.state.productDetail.image[0]
        }, this.state.quantity)
    }

    items = [
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020752/1b604dbb-c4eb-2e00-656f-0018fa2fcae7.jpg?w=540&h=756&c=true&ntf=false",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-on-gian-ngan-ha-space-ver14-0020546/99d0e0c0-028f-0100-7fc1-0018b1dc92bf.jpg?w=540&h=756&c=true&ntf=false",
        "https://cdn2.yame.vn/pimg/ao-thun-co-tron-toi-gian-ver12-0020772/8d37fdf7-e945-0200-a992-0019046480a2.jpg?w=540&h=756&c=true&ntf=false"
    ]

    render() {
        const { name, price, image } = this.state.productDetail
        return (
            <div>
                {this.state.loading === false ? <Container className="my-5">
                    <Row>
                        <Col md={3}>
                            {/* PRODUCT DETAIL {this.props.params.id} */}
                            <ImageContainer items={image} />
                        </Col>
                        <Col md={9}>
                            <Card className="p-3">
                                <h3>{name}</h3>
                                <h5 className="text-warning">Price: {price}$</h5>
                                <CommonQuantityInput value={this.state.quantity} onChange={this.handleChangeQuantity} />
                                <Button color="primary" outline onClick={this.handleAddToCart} style={{ marginBottom: '5px' }}>Add to cart</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container> : 
                <div className="loading d-flex justify-content-center align-items-center">
                    <Spinner animation="border" color="primary" />
                </div>
                }
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product, quantity) => {
            dispatch({
                type: 'ADD_TO_CART', 
                payload: {
                    ...product,
                    quantity
                }
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(withParams(ProductDetail))











