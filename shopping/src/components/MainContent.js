import React from "react"
import ProductRow from "./ProductRow"
import ContentHeader from "./ContentHeader"
import Modal from './Modal';


class MainContent extends React.Component {
    state = {
        open: false,
        products: []
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

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <>
            <main>
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
                            />
                        ))
                        : <h3>EMPTY</h3>
                    }
                </div>
            </main>
            {this.state.open ? <Modal onToggleModal={this.toggleModal} onAddProduct={this.addProduct} /> : ''}
            </>
        )
    }
}

export default MainContent