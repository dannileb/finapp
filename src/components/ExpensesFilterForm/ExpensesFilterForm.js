import React from 'react';
import classes from './ExpensesFilterForm.module.css'
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
const ExpensesFilterForm = ({sortType, setSortType, setSearchQuery}) => {

    //TODO: сделать поиск по дате

    function sortExpenses(sort){
        setSortType(sort);
    }

    function getSearchInputValue(value){
        setSearchQuery(value);
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
            <Input
                sendValue={getSearchInputValue}
                name={"descSearchValue"}
                resetTrigger={""}
                classnames={["SearchExpenseInput"]}
                placeholder={"Поиск по описанию..."}
            />
        </div>
    );
};

export default ExpensesFilterForm;