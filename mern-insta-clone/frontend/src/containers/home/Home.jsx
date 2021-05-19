import React, { Component } from 'react';
import { Post } from '../index';
import './home.css';


export default class Home extends Component {

    render() {
        return (
            <div className="home_container">
                <Post />
                <Post />
                <Post />
            </div>
        )
    }
}
