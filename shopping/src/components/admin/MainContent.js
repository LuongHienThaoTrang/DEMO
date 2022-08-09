import React from "react"
import ProductRow from "./ProductRow"
import ContentHeader from "./ContentHeader"
import Modal from './Modal';
import axios from 'axios'
import { Spinner } from "reactstrap";
import Swal from 'sweetalert2';



class MainContent extends React.Component {
    state = {
        open: false,
        products: [],
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
        // Cách 1: Chưa Phân quyền Admin login khi addProduct
        // const product = {
        //     // id tự động tăng sau khi thêm product
        //     id: this.state.products.length,
        //     name,
        //     price,
        //     image
        // }
        // this.setState({
        //     products: [...this.state.products, product]
        // })

        // Cách 2: Admin login success, vào trang admin ADD_PRODUCT lên API
        // add product sau đó request post lên API
        // Khi post product lên không truyền Token === chưa login => addProduct unSuccessfully','
        // Khi add product: mở tab khác vào trang products xem sp cập nhật chưa, không nên thoát trang admin
        axios.post('http://localhost:9696/products', {
            // Dữ liệu product
            name, 
            price,
            image
        }, {
            // Lấy ra Token
            headers: {
                token: JSON.parse(window.localStorage.getItem('adminToken'))
            }
        })
            .then((response) => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Create Successfully',
                    timer: 2000,
                    timerProgressBar: true,
                })
                // Sau khi Admin thêm product success trên API, cập nhật product trên UI
                .then(() => {
                    axios.get("http://localhost:9696/products")
                    .then(response => {
                        this.setState({
                            products: response.data,
                            loading: false
                        })
                    })
                })
                
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Create unSuccessfully',
                    text: error.message,
                    timer: 2000,
                    timerProgressBar: true,
                })
            })
    }

    updateProduct = (id, name, price, image) => {
        // const newProducts = [...this.state.products]
        // console.log(newProducts[this.state.isEditting])
        // console.log(this.state.isEditting);
        // newProducts[this.state.isEditting] = {
        //     ...newProducts[this.state.isEditting],
        //     name, 
        //     price,
        //     image
        // }
        // this.setState({
        //     products: newProducts
        // })

        // // Cách 2: Admin login success, vào trang admin ADD_PRODUCT lên API
        // // add prooduct sau đó request post lên API
        // // Khi post product lên không truyền Token === chưa login
        
        // const newProducts = [...this.state.products]
        // console.log(newProducts[this.state.isEditting])
        // newProducts[this.state.isEditting] = {
        //     ...newProducts[this.state.isEditting],
        //     name, 
        //     price,
        //     image
        // }

        // console.log(this.state.isEditting);
        // const newProducts = [...this.state.products]
        // newProducts[this.state.isEditting]

        const baseURL = `http://localhost:9696/products`
        axios.get(`${baseURL}`, {
            // Lấy ra Token
            headers: {
                token: JSON.parse(window.localStorage.getItem('adminToken'))
            }
        })
            .then((response) => {
                console.log(this.setState({ products: response.data }));
                console.log(this.state.products[0]);
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successfully',
                    timer: 2000,
                    timerProgressBar: true,
                })
                // Sau khi Admin thêm product success trên API, cập nhật product trên UI
                .then(() => {
                    axios.get(`http://localhost:9696/products`)
                    .then(response => {
                        this.setState({
                            products: response.data,
                            loading: false
                        })
                    })
                })
                
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Update unSuccessfully',
                    text: error.message,
                    timer: 2000,
                    timerProgressBar: true,
                })
            })
    }

    deleteProduct = (id) => {
        // Cách 1: Chưa Phân quyền Admin login khi deleteProduct
        // const newProducts = [...this.state.products].filter((product) => {
        //     return product.id !== id;
        // })
        // this.setState({
        //     products: newProducts
        // })

        // Cách 2: Admin login success, vào trang admin DELETE_PRODUCT lên API
        // Vì đưa id vào url, nên k cần data {} như addProduct
        axios.delete(`http://localhost:9696/products/${id}`, {
            // Lấy ra Token
            headers: {
                token: JSON.parse(window.localStorage.getItem('adminToken'))
            }
        })
            .then((response) => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Delete Successfully',
                    timer: 2000,
                    timerProgressBar: true,
                })
                // Sau khi Admin xóa product success trên API, cập nhật product trên UI
                .then(() => {
                    axios.get("http://localhost:9696/products")
                    .then(response => {
                        this.setState({
                            products: response.data,
                            loading: false
                        })
                    })
                })
                
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Delete unSuccessfully',
                    text: error.message,
                    timer: 2000,
                    timerProgressBar: true,
                })
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
        console.log(productIndex);
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