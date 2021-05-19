import React from 'react';
import './home.css';

import { Jumbotron } from 'react-bootstrap';
import { Sidebar } from '../index'

const Home = () => {
    return (
        <Jumbotron>
            <Sidebar />
        </Jumbotron>
    )
}

export default Home;
