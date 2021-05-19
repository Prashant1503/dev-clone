import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav, Button, NavDropdown } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';


import './sidebar.css';

const Sidebar = () => {
    return (
        <div class="sidebar">
            <div className="sidebar-brand">
                <h3><span className="bi bi-list"></span>Ecommerce</h3>
            </div>

            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a>
                            <i class="bi bi-house"></i>
                            <span>Home</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar;
