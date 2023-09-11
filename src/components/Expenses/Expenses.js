import React from 'react';
import classes from './Expenses.module.css'
const Expenses = (props) => {
    return (
        <div className={classes.Expenses}>
            {props.children}
        </div>
    );
};

export default Expenses;