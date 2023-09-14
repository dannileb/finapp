import React from 'react';
import classes from './Button.module.css'

const Button = ({children, className, ...props}) => {
    return (
        <button
            className={classes[className]}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;