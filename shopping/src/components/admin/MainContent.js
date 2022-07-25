import React from "react"
import ProductRow from "./ProductRow"
import ContentHeader from "./ContentHeader"
import Modal from './Modal';
import axios from 'axios'
import { Spinner } from "reactstrap";


class MainContent extends React.Component {
    state = {
        open: false,
        products: [

        ],
        isEditting: undefined, //index không phải id
        loading: false,
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

    addProduct = (name, price, image) => {
        const product = {
            // id tự động tăng sau khi thêm product
            id: this.state.products.length,
            name,
            price,
            image
        }
        this.setState({
            products: [...this.state.products, product]
        })
    }

    updateProduct = (name, price, image) => {
        const newProducts = [...this.state.products]
        console.log(newProducts[this.state.isEditting])
        newProducts[this.state.isEditting] = {
            ...newProducts[this.state.isEditting],
            name, 
            price,
            image
        }
        this.setState({
            products: newProducts
        })
    }

    deleteProduct = (id) => {
        const newProducts = [...this.state.products].filter((product) => {
            return product.id !== id;
        })
        this.setState({
            products: newProducts
        })
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
    }

    updateIsEditting = (id) => {
        const productIndex = this.state.products.findIndex((product) => {
            return product.id === id
        })
        this.setState({
            isEditting: productIndex
        })
        this.toggleModal()
    }    

    clearIsEditing = () => {
        this.setState({
            isEditting: undefined
        })
    }

    render() {
        return (
            <>
            <main>
                {this.state.loading && 
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" color="primary" />
                    </div>
                }
                <ContentHeader onToggleModal={this.toggleModal} onAddProduct={this.addProduct} /> 
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Id
                        </div>
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {this.state.products.length > 0 ? 
                        this.state.products.map((product, index) => (
                            <ProductRow 
                                key={index}
                                product={product}
                                onDeleteProduct={this.deleteProduct}
                                onUpdateIsEditting={this.updateIsEditting}
                            />
                        ))
                        : <h3 className="no-result">No result!</h3>
                    }
                </div>
            </main>
            {this.state.open ? <Modal 
                onUpdateProduct={this.updateProduct} 
                onClearIsEditing={this.clearIsEditing} 
                onEdittingProduct={this.state.products[this.state.isEditting]} 
                onToggleModal={this.toggleModal} 
                onAddProduct={this.addProduct}      
                
                /> : ''}
            </>
        )
    }
}

export default MainContent