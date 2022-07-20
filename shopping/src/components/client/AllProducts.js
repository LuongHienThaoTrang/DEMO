import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import NavbarClient from './NavbarClient';
import ProductList from './ProductList';
import SidebarClient from './SidebarClient';

function AllProducts() {

    

    return (
        <>
            <NavbarClient />
            <Container>
                <Row className="mt-5">
                    <Col md={3}>
                        <SidebarClient />
                    </Col>
                    <Col md={9}>
                        <ProductList />
                        <Pagination className="mt-5 d-flex justify-content-end" aria-label='Page navigation example'>
                            <PaginationItem><PaginationLink first href="#" /></PaginationItem>
                            <PaginationItem><PaginationLink previous href="#" /></PaginationItem>
                            <PaginationItem><PaginationLink first href="#">1</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink first href="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink first href="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink first href="#">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink first href="#">5</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next href="#" /></PaginationItem>
                            <PaginationItem><PaginationLink last href="#" /></PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AllProducts