import axios from 'axios'
import React from 'react'
import { Row, Spinner } from "reactstrap"
import ProductItem from "./ProductItem"
import { connect } from 'react-redux'

class ProductList extends React.Component {
    state = {
        products: [],
        loading: false
    }


    componentDidMount() {
        this.setState({
            loading: true
        })
        // Get thì gửi trên query params
        axios.get("http://localhost:9696/products")
            .then(response => {
                this.setState({
                    products: response.data, 
                    loading: false
                })
            })
    }

    render() {
        return (
            <Row>
                {this.state.loading && 
                    <div className="loading d-flex justify-content-center align-items-center">
                        <Spinner animation="border" color="primary" />
                    </div>
                }
                {this.state.products.map((product, index) => (
                    <ProductItem 
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        addProduct={this.props.addProduct}
                    />
                ))}
            </Row>
        )
    }
}

// Lấy phương thức đispatch dùng mapDispatchToProps 
const mapDispatchToProps = (dispatch) => {
    // store.dispatch === dispatch
    // State thay đổi thì giao diện thay đổi => mà state nó k phải nằm 1 chỗ mà nó nằm ngay trên store thì bất kì componnent mà connect với nó thì sẽ lấy được
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

export default connect(null, mapDispatchToProps)(ProductList)
