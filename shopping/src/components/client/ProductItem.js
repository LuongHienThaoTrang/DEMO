import { Button, Card, CardBody, CardSubtitle, CardTitle, Col } from "reactstrap"

function ProductItem({ name, price, image }) {


    
    return (
        <Col md={4} className="mb-4">
            <Card style={{ width: '100%', overflow: 'hidden', margin: '0' }}>
                <img
                    alt=""
                    width="100%"
                    height="250px"
                    src={image}
                    className="objectFit"
                />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{price}$</CardSubtitle>
                    <Button color="primary" outline>Add to cart</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductItem