import React, {useState} from 'react';
import classes from './ExpenseForm.module.css'
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AddIcon from "../UI/AddIcon/AddIcon";
import uuid from "react-uuid";
const ExpenseForm = ({create}) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const defaultExpense = {
        id: "",
        amount: "0",
        description: '',
        date: formattedDate
    }

    const [expense, setExpense] = useState(defaultExpense);

    const [resetTrigger, setResetTrigger] = useState('')

    const addExpense = (event) =>{
        event.preventDefault();
        const newExpense = {
            ...expense,
            id: uuid()
        }
        create(newExpense);

        setExpense(defaultExpense)
        setResetTrigger(uuid())
    }


    const getValue = (value, name) =>{
        setExpense({...expense, [name] : value})
    }

    return (
        <form className={classes.ExpenseForm}>
            <div className={classes.InputsWrapper}>
            <Input
                classnames={["AddExpenseInput"]}
                name={"amount"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="number"
                placeholder={"Сумма"}/>
            <Input
                classnames={["AddExpenseInput"]}
                name={"description"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="text"
                placeholder={"Описание"}
                maxLength={32}/>
            <Input
                classnames={["AddExpenseInput"]}
                name={"date"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="date"
                placeholder={"Дата"}/>
            </div>
            <Button onClick={addExpense} className={"CreateButton"}>
                <AddIcon color={"var(--PrimaryColor)"}/>
            </Button>
        </form>
    );
};

export default ExpenseForm;