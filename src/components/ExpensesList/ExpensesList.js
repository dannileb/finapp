import React from 'react';
import classes from './ExpensesList.module.css'
import Expense from "../Expense/Expense";
const ExpensesList = ({expenses, removeExpense}) => {
    return (
        <div className={classes.Expenses}>
            {expenses.map(expense =>
                <Expense
                    expense={expense}
                    key={expense.id}
                    remove={removeExpense}
                />
            )}
        </div>
    );
};

export default ExpensesList;