
function ProductRow({ product }) {
    
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
                <img src={product.image} width="50%" height="38px" alt=""/>
            </div>
            <div className="table-cell">
                <button className="btn">
                    Edit
                </button>
                <button className="btn">
                    Delete
                </button>
            </div>        
        </div>
    )
}

export default ProductRow