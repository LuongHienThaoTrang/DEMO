
function ProductRow({ id, name, price, image }) {
    return (
        <div className="table-rows">
            <div className="table-cell">
                {id}
            </div>
            <div className="table-cell">
                {name}
            </div>
            <div className="table-cell">
                {price}$
            </div>
            <div className="table-cell">
                <img src={image} width="50%" height="38px" alt=""/>
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