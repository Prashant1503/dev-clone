import React, { useState } from 'react';
import {
    Form,

} from 'react-bootstrap';



const Input = ({ placeholder, label, value, type, className }) => {


    return (
        <>
            <Form.Label md>{label}</Form.Label>
            <Form.Control
                placeholder={placeholder}
                type={type}
                value={value}
                className={className} />
        </>
    )
}

export default Input;
