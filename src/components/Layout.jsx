import React from 'react';
import { Link } from 'react-router-dom';

import style from './Layout.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {APP_VERSION} from "../version";

function TempNav() {
  return (
    <div className={style.navBar}>
      <Link to='/'>Home</Link>
      <Link to='/questions'>Questions</Link>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div>
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
      <footer className={"text-center text-light p-3 " + style.footer}>
        <Container>
          <span className="align-middle">Version { APP_VERSION } - Created by DevTeam &copy; 2018-2019.</span>
        </Container>
      </footer>
    </div>
  );
}
