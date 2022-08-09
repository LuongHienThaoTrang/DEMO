import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from "reactstrap"

function ProductItem({ id, name, price, image, addProduct }) {

    const handleAddToCart = () => {
        // add product và quantity 
        addProduct({
            id, 
            name, 
            price, 
            images: image[0]
        }, 1)
    }

    return (
        <Col md={4} className="mb-4">
            <Card style={{ width: '100%', overflow: 'hidden', margin: '0' }}>
                <img
                    alt=""
                    width="100%"
                    height="230px"
                    src={image} //Thêm số 0 là do admin thêm sp 1 mảng. Có thể xóa 0, nếu k muốn khi admin thêm sp hiển thị thêm 3 ảnh nhỏ dưới
                    className="objectFit"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {/* ClassName: cart-title-link: xử lí title không quá 1 dòng */}
                        <Link to={`/products/${id}`} className="cart-title-link" >{name}</Link>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{price}$</CardSubtitle>
                    <Button color="primary" outline onClick={handleAddToCart} style={{ width: '100%' }}>Add to cart</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductItem