import classes from './styles/App.module.css'
import Header from "./components/Header/Header";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import React, {useMemo, useState} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import uuid from "react-uuid";
import Error from "./components/UI/Error/Error";
import ExpensesFilterForm from "./components/ExpensesFilterForm/ExpensesFilterForm";


function App() {
    const [expenses, setExpenses] = useState([
        {id:uuid(), amount: 1200, description:"Подработка", date: "2023-09-11"},
        {id:uuid(), amount: -200, description:"Покупки", date: "2023-09-10"},
        {id:uuid(), amount: 250, description:"Продажа книги", date: "2023-09-09"},
        {id:uuid(), amount: 450, description:"Ещё что-то", date: "2023-09-09"}
    ])

    const [isValid, setIsValid] = useState(true)
    const [exchangeDate, setExchangeDate] = useState("");
    const [sortType, setSortType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const createExpense = (newExpense) =>{

        if (
            newExpense.description &&
            newExpense.amount
        )
            setExpenses([newExpense, ...expenses, ]);

        else{
            setIsValid(false);
            setTimeout(
                ()=> setIsValid(true), 3000
            )
        }
    }

    const removeExpense = (removeExpense) =>{

        setExpenses(expenses.filter(
            expense => expense.id !== removeExpense.id
        ))
    }

    const sortedExpenses = useMemo(()=>{
        console.log("sort");
        let sortedExpenses = []

        switch (sortType){
            case "incomes":
                sortedExpenses = [...expenses].sort(
                    (a,b) => b.amount-a.amount
                )
                break;
            case "expenses":
                sortedExpenses = [...expenses].sort(
                    (a,b) => a.amount-b.amount
                )

                break;
            case "all":
                sortedExpenses = [...expenses].sort(
                    (a,b) => new Date(b.date) - new Date(a.date)
                )
                break;
            default:
                sortedExpenses = [...expenses]
                break;
        }

        return sortedExpenses;
    }, [expenses, sortType]);

    const resultExpenses =  useMemo(()=>{
         return  sortedExpenses.filter(expense => expense.description.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedExpenses])

    return (
    <div className={classes.App}>
        <div className={classes.Container}>
            <Header setDate={setExchangeDate}/>
            {
                !isValid
                    ?
                    <Error errorText={"Все поля должны быть заполнены!"}/>
                    :
                    <></>
            }
            <ExpenseForm create={createExpense}/>
            <hr/>
            <ExpensesFilterForm
                sortType={sortType}
                setSortType={setSortType}
                setSearchQuery={setSearchQuery}
            />

            {
                resultExpenses.length
                    ?
                    <ExpensesList expenses={resultExpenses} removeExpense={removeExpense}/>
                    :
                    <p className={classes.Note}>Пока здесь пусто!</p>
            }

            <p className={classes.Note}>Значения курсов валют актуальны и предоставлены ExchangeRates API {exchangeDate}</p>
        </div>
    </div>
  );
}

export default App;
