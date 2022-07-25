import axios from 'axios'
import React from 'react'
import { Row, Spinner } from "reactstrap"
import ProductItem from "./ProductItem"


class ProductList extends React.Component {
    state = {
        products: [],
        loading: false
    }


    componentDidMount() {
        this.setState({
            loading: true
        })
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
                    />
                ))}
            </Row>
        )
    }
}

export default ProductList