import React, { Component } from 'react';
import { CustomButton, CustomInput } from "../../components/index";
import './register.css';

export default class Register extends Component {
    render() {
        return (
            <div className="root-container">
                <div className="card">
                    <div className="row">
                        <h5 className="card_title">Welcome New User</h5>
                        <div className="input-container">


                            <div class="input-field col s12">
                                <CustomInput label="Full Name" placeholder="Enter full name" type="text" />

                            </div>


                            <div class="input-field col s12">
                                <CustomInput label="Email" placeholder="Enter email" type="email" />

                            </div>

                            <div class="input-field col s12">
                                <CustomInput label="Password" placeholder="Enter password" type="password" />
                            </div>


                        </div>
                    </div>

                    {/* button */}

                    <div className="btn-container">
                        <CustomButton title="Sign Up " />
                    </div>

                </div>
            </div>
        )
    }
}
