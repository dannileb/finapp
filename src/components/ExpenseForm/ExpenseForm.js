import React, {useState} from 'react';
import classes from './ExpenseForm.module.css'
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AddIcon from "../UI/AddIcon/AddIcon";
import uuid from "react-uuid";
const ExpenseForm = ({create}) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const [expense, setExpense] = useState({
        id: "",
        amount: "0",
        description: '',
        date: formattedDate
    });

    const [resetTrigger, setResetTrigger] = useState('')

    const addExpense = (event) =>{
        event.preventDefault();
        const newExpense = {
            ...expense,
            id: uuid()
        }
        create(newExpense);
        setResetTrigger(uuid())
    }


    const getValue = (value, name) =>{
        setExpense({...expense, [name] : value})
    }

    return (
        <form className={classes.ExpenseForm}>
            <div className={classes.InputsWrapper}>
            <Input
                classNames={["Input","AddExpenseInput"]}
                name={"amount"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="number"
                placeholder={"Сумма"}/>
            <Input
                classNames={["Input","AddExpenseInput"]}
                name={"description"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="text"
                placeholder={"Описание"}
                maxLength={32}/>
            <Input
                classNames={["Input","AddExpenseInput"]}
                name={"date"}
                sendValue={getValue}
                resetTrigger={resetTrigger}
                type="date"
                placeholder={"Дата"}/>
            </div>
            <Button onClick={addExpense} className={"CreateButton"}>
                <AddIcon/>
            </Button>
        </form>
    );
};

export default ExpenseForm;