
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
                <img src={product.image} width="50px" height="50px" alt=""/>
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