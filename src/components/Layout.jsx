import React from 'react';
import { Link } from 'react-router-dom';

import style from './Layout.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Nav from "react-bootstrap/Nav";

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
      <Row>
        <Col md="auto" className={"d-none d-md-block bg-dark " + style.sidebar} as="nav">
          <div className={style.sidebarSticky}>
            <ul className="nav flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/q/browse">Questions</Nav.Link>
            </ul>
          </div>
        </Col>
        <Col md={10} lg={11} className="ml-sm-auto px-4">
          {children}
        </Col>
      </Row>
    </div>
  );
}
