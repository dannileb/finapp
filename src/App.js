import classes from './styles/App.module.css'
import Header from "./components/Header/Header";
import Expense from "./components/Expense/Expense";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import {useState} from "react";
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

           <ExpensesFilterForm expenses={expenses} setExpenses={setExpenses}/>

            {
                expenses.length
                    ?
                    <ExpensesList>
                        {
                            expenses.map(expense=>
                                <Expense
                                    expense={expense}
                                    key={expense.id}
                                    remove={removeExpense}
                                />

                            )
                        }
                    </ExpensesList>
                    :
                    <p className={classes.Note}>Пока здесь пусто!</p>
            }

            <p className={classes.Note}>Значения курсов валют актуальны и предоставлены ExchangeRates API {exchangeDate}</p>
        </div>
    </div>
  );
}

export default App;
