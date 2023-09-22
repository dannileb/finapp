import classes from './styles/App.module.css'
import Header from "./components/Header/Header";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import React, {useState} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import uuid from "react-uuid";
import Error from "./components/UI/Error/Error";
import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";

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

    const sortedExpenses = getSortedExpenses("all");

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

    function getSortedExpenses(){
        console.log(searchQuery);
        let filteredExpenses = []
        searchQuery
            ?
            filteredExpenses = [...expenses.filter(expense => expense.date === searchQuery)]
            :
            filteredExpenses = [...expenses]

        switch (sortType){
            case "incomes":
                filteredExpenses = filteredExpenses.sort(
                    (a,b) => b.amount-a.amount
                )
                break;
            case "expenses":
                filteredExpenses = filteredExpenses.sort(
                    (a,b) => a.amount-b.amount
                )

                break;
            case "all":
                filteredExpenses = filteredExpenses.sort(
                    (a,b) => new Date(b.date) - new Date(a.date)
                )
                break;
            default:
                break;
        }
        return filteredExpenses;
    }

    function sortExpenses(sort){
        setSortType(sort);
    }

    function getSearchInputValue(value){
        setSearchQuery(value);
    }

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
                <Input
                    type="date"
                    sendValue={getSearchInputValue}
                    name={"descSearchValue"}
                    resetTrigger={""}
                    classnames={["SearchExpenseInput"]}
                    placeholder={"Поиск по дате..."}
                />
            </div>

            {
                sortedExpenses.length
                    ?
                    <ExpensesList expenses={sortedExpenses} removeExpense={removeExpense}/>
                    :
                    <p className={classes.Note}>Пока здесь пусто!</p>
            }

            <p className={classes.Note}>Значения курсов валют актуальны и предоставлены ExchangeRates API {exchangeDate}</p>
        </div>
    </div>
  );
}

export default App;
