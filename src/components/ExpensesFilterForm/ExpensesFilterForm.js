import React, {useState} from 'react';
import classes from './ExpensesFilterForm.module.css'
import Select from "../UI/Select/Select";
const ExpensesFilterForm = ({setExpenses, expenses}) => {


    const [sortType, setSortType] = useState('');

    const sortExpenses = (type) =>{
        setSortType(type)
        switch (type){
            case "incomes":
                setExpenses([...expenses.sort(
                    (a,b) => b.amount-a.amount
                )])
                break;
            case "expenses":
                setExpenses([...expenses.sort(
                    (a,b) => a.amount-b.amount
                )])

                break;
            case "all":
                setExpenses([...expenses.sort(
                    (a,b) => new Date(b.date) - new Date(a.date)
                )])
                break;
            default:
                break;
        }
    }

    return (
        <div className={classes.Form}>

            <Select
                value={sortType}
                onChange={sortExpenses}
                options={[
                    {value: "all", text: "Всё"},
                    {value: "incomes", text: "Доходы"},
                    {value: "expenses", text: "Расходы"}
                ]}
            />
        </div>
    );
};

export default ExpensesFilterForm;