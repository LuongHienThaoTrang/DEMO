import React, { Component } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'reactstrap';
import ImageContainer from './ImageContainer';
import CommonQuantityInput from './CommonQuantityInput';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import axios from 'axios';

class CartProduct extends React.Component {
    state = {
        quantity: 1
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
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        timer: 2000,
                        timerProgressBar: true,
                    }
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                // Không xóa sp thì cho quantity mặc định 1 trong cart
                this.setState({
                    quantity: this.state.quantity + 1 
                }, () => {
                    // Sau khi không xóa ta updated lại cart dùng callback trong setState
                    this.props.updateCart(this.props.product.cartId, this.state.quantity)
                })
                swalWithBootstrapButtons.fire(
                    {
                        icon: 'error',
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        timer: 2000,
                        timerProgressBar: true,
                    }
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

export class CheckoutModal extends React.Component {
    state = {
        fullName: '',
        phone: '',
        address: '',
        loading: undefined
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    handleClose = () => {
        this.props.toggleModal()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Khi submit form sẽ gửi hết dữ liệu trong state lên thông qua key value
    handleSubmit = e => {
        e.preventDefault()
        
        this.setState({
            loading: true
        })

        // Post thì nằm trong body
        // Nếu không dùng post được vào file: auth-middleware.js thêm điều kiện ràng buộc method POST với cart
        axios.post("http://localhost:9696/carts", {
            // Thông tin người mua
            ...this.state,
            // Truyền thêm product khi thêm vào cart
            cartProduct: [
                ...this.props.cart
            ],
            // Truyền totalItem, totalPrice
            totalItem: this.props.totalItem,
            totalPrice: this.props.totalPrice
        })
            .then(response => {
                this.setState({
                    loading: false
                })
                
                // Khi checkout thành công thì phải có phản hồi cho người dùng: Dùng sweetalert2
                Swal.fire({
                    icon: 'success',
                    title: 'Checkout successfully',
                    text: 'Your file has been Checkout.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })
                .then(() => {
                    // Sau đó ta dispatch 1 action: clearCart -> xóa hết all product trong cart
                    this.props.clearCart()
                    // Tắt modal
                    this.handleClose()
                }) 
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                // Khi checkout thất bại thì phải có phản hồi cho người dùng: Dùng sweetalert2
                Swal.fire({
                    icon: 'error',
                    title: 'Checkout unsuccessfully',
                    text: 'Something went wrong',
                    timer: 2000,
                    timerProgressBar: true,   
                    showConfirmButton: false
                })
                .then(() => {
                    // Tắt modal
                    this.handleClose()
                }) 
            })
    }

    render() {
        const { fullName, phone, address } = this.state

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-flex">
                        <h3>Checkout</h3>
                        {this.state.loading === false ? 
                            <button onClick={this.handleClose} className="modal-close">X</button>
                            :
                            <Spinner animation="border" color="primary" />
                        }
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="mb-1">Full Name</label>
                            <input type="text" className="form-control" name="fullName" placeholder="Full Name" value={fullName} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label className="mb-1">Phone</label>
                            <input type="number" className="form-control" name="phone" placeholder="Phone" value={phone} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label className="mb-1">Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Address" value={address} onChange={this.handleChange} />
                        </div>
                       <button className="btn btn-outline-primary mt-3" style={{ width: '100%' }}>Checkout</button>
                    </form>
                </div>
            </div>
        )
    }
}



class Cart extends Component {

    state = {
        open: false,
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open,
        })
    }

    render() {
        return (
            <div>
                <>
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
                                    <h3>Total items: {this.props.totalItem}</h3>
                                    <h4 className="text-warning">Total price: {this.props.totalPrice}$</h4>
                                    <Button color="primary" onClick={this.toggleModal}>Checkout</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    {this.state.open ? <CheckoutModal 
                        totalItem={this.props.totalItem}
                        totalPrice={this.props.totalPrice}
                        cart={this.props.cart} 
                        toggleModal={this.toggleModal} 
                        clearCart={this.props.clearCart} 
                        /> 
                        : ''
                    }
                </>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const totalItem = state.cart.reduce((totalItem, product) => totalItem + product.quantity, 0)
    const totalPrice = state.cart.reduce((totalPrice, product) => totalPrice + (product.price * product.quantity), 0)
    return {
        cart: state.cart,
        totalItem,
        totalPrice
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
        },

        clearCart: () => {
            dispatch({
                type: 'CLEAR_CART'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)