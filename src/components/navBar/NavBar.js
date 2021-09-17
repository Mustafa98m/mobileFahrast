import React from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import NavBarSearch from './NavBarSearch';
import NavbarMenu from './NavbarMenu';

function NavBar() {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Nav>
                        {/* <Container>
                            <NavbarMenu></NavbarMenu>
                        </Container> */}
                        <Navbar.Brand href="#home" className="ms:50ne">فهرست</Navbar.Brand>
                        <NavBarSearch></NavBarSearch>
                    </Nav>
                </Container>

            </Navbar>


        </div >
    )
}

export default NavBar
