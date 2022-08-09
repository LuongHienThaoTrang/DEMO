import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CustomizedBadges from '../assets/icons/cart-shopping-solid';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'

function NavbarClient({ cart, cartTotal }) {

    // const toggle = () => {
    //     return !isOpen
    // }
    // const isOpen = true;

    const [ open, setOpen ] = useState(false);

    const toggleNavbarClient = () => {
        setOpen(!open);
    }


    const isOpen = true

    
    return (
        <Container fluid={true} >
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <NavLink to="/">
                        LOGO
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbarClient} />
                <Collapse open={isOpen} navbar style={{ lineHeight: '40px' }}>
                <Nav className="me-auto" navbar>
                    <NavItem style={{ marginRight: '16px' }}>
                        <NavLink to="/products/">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cart">Cart</NavLink>
                    </NavItem>
                    <NavItem style={{ marginLeft: '16px' }}>
                        <NavLink to="/admin">Admin</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText style={{ marginRight: '4px', padding: '0' }}>
                    <CustomizedBadges total={cartTotal} />
                </NavbarText>
                </Collapse>
            </Navbar>
        </Container>       
    )
}

const mapStateToProps = (state) => {
    // 1. ở navbarClient nó lấy total products
    // 2. Còn ở cart.js nó lấy props mới là nguyên mảng giỏ hàng
    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const total = state.cart.reduce((total, product) => total + product.quantity, 0)
    return {
        // return quantity
        cartTotal: total
    }
}

export default connect(mapStateToProps)(NavbarClient)
