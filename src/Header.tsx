import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand href="#lab">포텐님의 아바타법 코인 백테스트</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#lab">연구소</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Header };
