import React from 'react';
import classes from "./Exchange.module.css";

const Exchange = ({type, value}) => {
    return (
        <div className={classes.Exchange}>
            <span className={classes.Type}>{type}</span>
            <span className={classes.Value}>{value}</span>
        </div>
    );
};

export default Exchange;