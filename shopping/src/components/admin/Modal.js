
import React from 'react';

class Modal extends React.Component {
    state = {
        id: '',
        name: 'PRODUCT NEW',
        price: '20',
        image: 'https://oldsailor.com.vn/vnt_upload/product/03_2022/PLDE88457_1_fb.jpg'
        //Thêm số 0 là do admin thêm sp 1 mảng. Có thể xóa 0, nếu k muốn khi admin thêm sp hiển thị thêm 3 ảnh nhỏ dưới
        // image: [
        //     "https://oldsailor.com.vn/vnt_upload/product/03_2022/PLDE88457_1_fb.jpg",
        //     "https://oldsailor.com.vn/vnt_upload/product/03_2022/PLDE88457_1_fb.jpg",
        //     "https://oldsailor.com.vn/vnt_upload/product/03_2022/PLDE88457_1_fb.jpg"
        //   ],
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
        e.preventDefault();
        const { name, price, image } = this.state
        if (this.props.onEdittingProduct) {
            this.props.onUpdateProduct(name, price, image)
        } else {
            this.props.onAddProduct(name, price, image)
        }
        this.handleClose()
    }

    componentDidMount() {
        if (this.props.onEdittingProduct) {
            const { name, price, image } = this.props.onEdittingProduct
            console.log('MODAL EDIT');
            this.setState({
                name,
                price,
                image
            })
        } else {
            console.log('MODAL CREATE');
        }    
    }

    componentDidUpdate() {
        console.log('MOUNT DID UPDATE');
    }

    componentWillUnmount() {
        console.log('MOUNT WILL UNMOUNT');
        this.props.onClearIsEditing()
    }

    render() {
        const { name, price, image } = this.state

        console.log('MODAL RENDER');

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-flex">
                        <h3>{this.props.onEdittingProduct ? 'Update' : 'Create'} Product</h3>
                        <button onClick={this.handleClose} className="modal-close">X</button>
                    </div>
                    <form>
                        <div className="form-group">
                            <label className="mb-1">Product Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Product name" value={name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label className="mb-1">Product Price</label>
                            <input type="number" className="form-control" name="price" placeholder="Product price" value={price} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mt-2">
                            <label className="mb-1">Product Image</label> 
                            {/* Thêm số 0 là do admin thêm sp 1 mảng. Có thể xóa 0, nếu k muốn khi admin thêm sp hiển thị thêm 3 ảnh nhỏ dưới */}
                            <input type="text" className="form-control" name="image" placeholder="Product image" value={image} onChange={this.handleChange} />
                        </div>
                       <button onClick={this.handleSubmit} className="btn btn-outline-primary mt-3" style={{ width: '100%' }}>{this.props.onEdittingProduct ? 'UPDATE' : 'ADD'}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal

