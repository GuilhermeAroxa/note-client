import React, {useState} from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import "../../styles/header.scss";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Navbar.Burger
          className="navbar-burger burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
          <Navbar.Item as="div">
            <Button 
              className="open-button" 
              color="white" 
              outlined
              onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default Header;