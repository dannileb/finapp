import classes from './styles/App.module.css'
import Header from "./components/Header/Header";
import Expense from "./components/Expense/Expense";
import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import expense from "./components/Expense/Expense";

function App() {
    const [expenses, setExpenses] = useState([
        {id:1, amount: 1200, description:"Подработка", date: "09.09"},
        {id:2, amount: -200, description:"Покупки", date: "09.09"}
    ])
    /*
            <Expense amount={1200} description={} date={}/>,
            <Expense amount={-200} description={"Покупка в магазине"} date={"09.09"}/>*/
  return (
    <div className={classes.App}>
        <div className={classes.Container}>
            <Header/>
            <Expenses>
                {
                    expenses.map(expense=>
                        <Expense
                            key={expense.id}
                            amount={expense.amount}
                            date={expense.date}
                            description={expense.description}/>
                    )
                }
            </Expenses>
        </div>
    </div>
  );
}

export default App;
