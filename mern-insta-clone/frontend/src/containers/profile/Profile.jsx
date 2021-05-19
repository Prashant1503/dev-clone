import React, { Component } from 'react';
import './profile.css';

import UserImage from '../../assets/images/user.jpg';

export default class Profile extends Component {
    render() {
        return (
            <div style={{
                maxWidth: '550px',
                margin: '0px auto',
                backgroundColor: 'white',
                borderRadius: '8px'
            }}>
                {/* 1st section */}
                <div className="post-section">
                    <div>
                        <img src={UserImage} id="user_profile" />
                    </div>
                    {/* 2nd container */}
                    <div>
                        <h4>Prashant Vani</h4>
                        <div className="post-activities">
                            <span>40 Followers</span>
                            <span>40 Following</span>

                        </div>
                    </div>
                </div>

                {/* 2nd section */}
                <div className="gallery-section">
                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />

                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />


                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />


                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />

                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />

                    <img src="https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />

                </div>
            </div>
        )
    }
}
