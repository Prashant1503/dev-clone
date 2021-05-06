import React from 'react';
import './button.css';

import { Button } from 'react-bootstrap'

const CustomButton = ({ title, className, handler }) => {
    return (
        <>
            <Button className={className} variant="primary" onClick={handler}>{title}</Button>
        </>
    )
}

export default CustomButton;
