import classes from './styles/App.module.css'
import Header from "./components/Header/Header";
import Expense from "./components/Expense/Expense";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import {useState} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import uuid from "react-uuid";
import Error from "./components/UI/Error/Error";

function App() {
    const [expenses, setExpenses] = useState([
        {id:uuid(), amount: 1200, description:"Подработка", date: "2023-09-09"},
        {id:uuid(), amount: -200, description:"Покупки", date: "2023-09-09"}
    ])

    const [isValid, setIsValid] = useState(true)

    /*
            <Expense amount={1200} description={} date={}/>,
            <Expense amount={-200} description={"Покупка в магазине"} date={"09.09"}/>*/

    function createExpense(newExpense){
        if (
            newExpense.description &&
            newExpense.amount
        )setExpenses([newExpense, ...expenses, ]);
        else{
            setIsValid(false);
            setTimeout(
                ()=> setIsValid(true), 3000
            )
        }
    }


  return (
    <div className={classes.App}>
        <div className={classes.Container}>
            <Header/>
            {
                !isValid
                    ?
                    <Error errorText={"Все поля должны быть заполнены!"}/>
                    :
                    <></>
            }
            <ExpenseForm create={createExpense}/>
            <ExpensesList>
                {
                    expenses.map(expense=>
                        <Expense
                            key={expense.id}
                            amount={expense.amount}
                            date={expense.date}
                            description={expense.description}/>
                    )
                }
            </ExpensesList>
        </div>
    </div>
  );
}

export default App;
