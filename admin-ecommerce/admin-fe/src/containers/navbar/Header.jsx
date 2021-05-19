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
        <Navbar bg="light" variant="dark">
            <NavLink to="/home"> Admin-App</NavLink >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>

                        <li>
                            <NavLink to="/category">category</NavLink>
                        </li>

                        <li>
                            <NavLink to="/setting">Settings</NavLink>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;
