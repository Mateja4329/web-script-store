import React from 'react'
import logo from '../assets/logo.png'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Nav, Navbar, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand href="/"><img src={logo} alt="FTN Skritarnica" width="30"
                height="30" className="d-inline-block align-top me-2"/>
                <span className="fw-semibold">Skriptarnica</span>
                Fakulteta tehnickih nauka u Novom Sadu
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link href="/cart"><FaShoppingCart /> Korpa</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                        <Nav.Link href="/login"><FaUser /> Prijava</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
