import React from 'react';
import classes from './Expense.module.css';

const Expense = ({amount, description, date}) => {
    return (
        <div className={classes.Expense}>
            <span className={
                amount>0
                    ?
                    [classes.Amount, classes.Amount_dynamic_positive].join(' ')
                    :

                    [classes.Amount, classes.Amount_dynamic_negative].join(' ')
            }>{
                amount>0
                    ?
                    "+"+amount
                    :
                    amount
            }</span>
            <p className={classes.Description}>{description}</p>
            <time className={classes.Date}>{date}</time>
        </div>
    );
};

export default Expense;