import React from 'react';
import classes from "./Error.module.css"
const Error = ({errorText}) => {
    return (
        <p className={classes.ErrorText}>{errorText}</p>
    );
};

export default Error;