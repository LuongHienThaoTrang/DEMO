import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import CustomizedBadges from '../assets/icons/cart-shopping-solid';
import { connect } from 'react-redux';

function NavbarClient({ cart }) {

    const toggle = () => {
        return false;
    }
    const isOpen = false;

    return (
        <Container fluid={true}>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <NavLink to="/">
                        LOGO
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ lineHeight: '40px' }}>
                <Nav className="me-auto" navbar>
                    <NavItem style={{ marginRight: '16px' }}>
                        <NavLink to="/products/">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cart">Cart</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText style={{ marginRight: '8px', padding: '0' }}>
                    <CustomizedBadges />
                </NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(NavbarClient)