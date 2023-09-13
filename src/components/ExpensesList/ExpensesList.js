import React from 'react';
import classes from './ExpensesList.module.css'
const ExpensesList = (props) => {
    return (
        <div className={classes.Expenses}>
            {props.children}
        </div>
    );
};

export default ExpensesList;