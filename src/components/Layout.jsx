import React from 'react';

import style from './Layout.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {APP_VERSION} from "../version";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar bg='dark' variant='dark' className={style.navbar} fixed='top'>
        <Navbar.Brand href="/">VikOverflow</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className='mr-auto'>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
          <NavDropdown title="USERNAME" id="user-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/api/v1/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <Row className={style.content}>
        <Col md={2} className={"d-none d-md-block bg-light " + style.sidebar} as="nav">
          <div className={style.sidebarSticky}>
            <ul className="nav flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/q/browse">Questions</Nav.Link>
              <Nav.Link href="/q/new">New question</Nav.Link>
            </ul>
          </div>
        </Col>
        <Col md={10} className="ml-md-auto px-4">
          {children}
        </Col>
      </Row>

      <footer className={"text-center text-light p-3 bg-dark " + style.footer}>
        <Container>
          <span className="align-middle">Version { APP_VERSION } - Created by DevTeam &copy; 2018-2019.</span>
        </Container>
      </footer>
    </div>
  );
}
