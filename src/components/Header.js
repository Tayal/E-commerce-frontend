import React, { useState, useContext } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap'
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { MainContext } from './Store';
import CartModal from './CartModal';

export default function Header() {

    const {user, dispatch_user} = useContext(MainContext);

    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    return (
        <div>
            <Navbar color='success' dark expand="xs">
                <NavbarBrand style={{fontFamily: 'Righteous'}}>Apni Dukaan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {   user.isAuthenticated ?
                            (
                                <>
                                    <NavLink>
                                        {"Welcome " + user.name}
                                    </NavLink>
                                    <NavLink onClick={() => dispatch_user({type: 'LOGOUT'})}>
                                        Logout
                                    </NavLink>
                                    <CartModal />
                                </>
                            )
                            :
                            (
                                <>
                                    <NavItem>
                                        <LoginModal />
                                    </NavItem>
                                    <NavItem>
                                        <SignupModal />
                                    </NavItem>
                                </>
                            )
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
