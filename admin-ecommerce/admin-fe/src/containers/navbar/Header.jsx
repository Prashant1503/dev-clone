import React, { useState } from 'react';
import './header.css';

import { Navbar, Nav, Button, Row, Col, Container } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Sidebar from '../../containers/sidebar/Sidebar';
import { IconContext } from 'react-icons';
import { Input } from '../../components/index';

const Header = () => {

    return (
        <Navbar className="bg-light justify-content-between">
            <Navbar.Brand href="#home">Admin App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/signin">Login</NavLink>
                    <NavLink to="/signup">SignUp</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
