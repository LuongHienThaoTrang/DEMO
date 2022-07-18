import ProductRow from "./ProductRow"

function MainContent() {
    return (
        <main>
            <div className="content-header">
                <h3>Products</h3>
                <button>+ Add</button>
            </div>
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
                <ProductRow 
                    id="1"
                    name="Product 1"
                    price="200"
                    image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3524/62808ea3382fb.png"
                />
                <ProductRow 
                    id="2"
                    name="Product 2"
                    price="400"
                    image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3524/62808ea3382fb.png"
                />
                <ProductRow 
                    id="3"
                    name="Product 3"
                    price="600"
                    image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3524/62808ea3382fb.png"
                />
                <ProductRow 
                    id="4"
                    name="Product 4"
                    price="800"
                    image="https://files.fullstack.edu.vn/f8-prod/blog_posts/3524/62808ea3382fb.png"
                />
            </div>
        </main>
    )
}

export default MainContent