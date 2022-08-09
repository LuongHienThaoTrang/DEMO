
function ProductRow({ product, onDeleteProduct, onUpdateIsEditting }) {

    const handleDelete = () => {
        onDeleteProduct(product.id)
    }

    const handleEdit = () => {
        onUpdateIsEditting(product.id)
    }
    
    return (
        <div className="table-rows">
            <div className="table-cell">
                {product.id}
            </div>
            <div className="table-cell">
                {product.name}
            </div>
            <div className="table-cell">
                {product.price}$
            </div>
            <div className="table-cell">
            {/* Thêm số 0 là do admin thêm sp 1 mảng. Có thể xóa 0, nếu k muốn khi admin thêm sp hiển thị thêm 3 ảnh nhỏ dưới */}
                <img src={product.image} className="img-productRow" alt="" />
            </div>
            <div className="table-cell">
                <button className="btn" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn" onClick={handleDelete}>
                    Delete
                </button>
            </div>        
        </div>
    )
}

export default ProductRow