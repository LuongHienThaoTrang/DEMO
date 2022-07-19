
import React from 'react';

class Modal extends React.Component {
    state = {
        id: '',
        name: 'PRODUCT NEW',
        price: '',
        image: ''
    }

    handleClose = () => {
        this.props.onToggleModal()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert('OK')
        e.preventDefault();
        const { name, price, image } = this.state
        this.props.onAddProduct(name, price, image)
        this.handleClose()
    }

    render() {
        const { name, price, image } = this.state

        return (
            <div className="modal">
                <div className="modal-content">
                    <button onClick={this.handleClose} className="modal-close">X</button>
                    <form>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Product name" value={name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label>Product Price</label>
                            <input type="number" className="form-control" name="price" placeholder="Product price" value={price} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label>Product Image</label>
                            <input type="text" className="form-control" name="image" placeholder="Product image" value={image} onChange={this.handleChange} />
                        </div>
                       <button onClick={this.handleSubmit} className="btn btn-outline-primary mt-3" style={{ width: '100%' }}>ADD</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal