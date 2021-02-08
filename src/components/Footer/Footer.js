import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='#home'>
        &#169; Airbnb, Inc. All rights reserved{" "}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Signed in as: <a href='#login'>Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
