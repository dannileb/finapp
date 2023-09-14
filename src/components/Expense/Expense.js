import React from 'react';
import classes from './Expense.module.css';
import Button from "../UI/Button/Button";

const Expense = ({expense, remove}) => {
    return (
        <div className={classes.Expense}>
            <span className={
                expense.amount>0
                    ?
                    [classes.Amount, classes.Amount_dynamic_positive].join(' ')
                    :

                    [classes.Amount, classes.Amount_dynamic_negative].join(' ')
            }>{
                expense.amount>0
                    ?
                    "+"+expense.amount
                    :
                    expense.amount
            }</span>

            <p className={classes.Description}>{expense.description}</p>

            <time className={classes.Date}>{expense.date}</time>

            <Button
                onClick={() => remove(expense)}
                className={"RemoveButton"}
            >Удалить</Button>
        </div>
    );
};

export default Expense;