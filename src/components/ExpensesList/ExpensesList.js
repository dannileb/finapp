import React from 'react';
import classes from './ExpensesList.module.css'
import Expense from "../Expense/Expense";
import {TransitionGroup, CSSTransition} from "react-transition-group";
const ExpensesList = ({expenses, removeExpense}) => {
    return (
            <TransitionGroup className={classes.Expenses}>
                {expenses.map(expense =>
                    <CSSTransition
                        key={expense.id}
                        timeout={250}
                        classNames="expense"
                    >
                        <Expense
                            expense={expense}
                            remove={removeExpense}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
    );
};

export default ExpensesList;