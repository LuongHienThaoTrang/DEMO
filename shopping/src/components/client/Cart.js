import React, { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'reactstrap';
import ImageContainer from './ImageContainer';
import CommonQuantityInput from './CommonQuantityInput';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
class CartProduct extends React.Component {
    state = {
        quantity: 0
    }

    componentDidMount() {
        // Store truyền props xuống: quantity
        // Có quantity ta lưu vào cái form, xong rồi chỉnh sửa trong cái form
        // => Cuối cùng gửi lại lên store
        this.setState({
            quantity: this.props.product.quantity
        })
    }

    handleChangeQuantity = (data, operator = false) => {
        // Khi người dùng không nhập vào input
        if (operator) {
            // Nếu có operator nó sẽ có giá trị là +1 or -1
            // Khi nó về 0: state hiện tại là 1 và nó bấm nút -1
            if (this.state.quantity === 1 && data === -1) {
                // delete   
                this.handleDelete()
            }
            return this.setState({
                quantity: this.state.quantity + data 
            }, () => {
                this.props.updateCart(this.props.product.cartId, this.state.quantity)
            })
        } 

        // if là operator do người dùng nhập
        // Nếu người dùng nhập quantity === 0 hoặc quantity < 0 thì delete product
        if (data === 0 || data < 0) {
            // delete product
            this.handleDelete()
        }

        // Input do Người dùng nhập
        this.setState({
            quantity: data
        }, () => {
            this.props.updateCart(this.props.product.cartId, this.state.quantity)
        })
    }

    // sweetalert2
    handleDelete = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
          
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteCart(this.props.product.cartId)
                swalWithBootstrapButtons.fire(
                    {
                        title: 'Deleted!',
                        timer: 2000,
                        timerProgressBar: true,
                        
                    }
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }


    render() {
        const { name, price, images } = this.props.product;
   
        return (
            <Card className="p-3">
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <ImageContainer items={images} />
                        </Col>
                        <Col md={9}>
                            <h3>{name}</h3>
                            <h5 className="text-warning">Price: {price}$</h5>
                            <CommonQuantityInput value={this.state.quantity} onChange={this.handleChangeQuantity} />
                            <Button color="primary" outline style={{ width: '100%' }}>Submit</Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}

class Cart extends Component {

    render() {
        return (
            <div>
                <Container className="my-5">
                    <Row>
                        <Col md={9}>
                            {this.props.cart.length > 0 && this.props.cart.map(product => {
                                return <CartProduct deleteCart={this.props.deleteCart} updateCart={this.props.updateCart} product={product} key={product.cartId} />
                            })}
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCart: (cartId, quantity) => {
            dispatch({
                type: 'UPDATE_CART', 
                payload: {
                    cartId,
                    quantity
                }
            })
        },
        deleteCart: cartId => {
            dispatch({
                type: 'DELETE_CART',
                payload: cartId
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)