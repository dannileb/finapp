import React from 'react';
import classes from './ExpensesFilterForm.module.css'
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
const ExpensesFilterForm = ({sortType, setSortType, setSearchQuery, setSearchDate}) => {

    //TODO: сделать поиск по дате

    function sortExpenses(sort){
        setSortType(sort);
    }

    function getSearchInputValue(value){
        setSearchQuery(value);
    }

    function getSearchDateValue(value){
        setSearchDate(value);
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
            <Input
                type={"date"}
                defaultvalue={''}
                sendValue={getSearchDateValue}
                name={"dateSearchValue"}
                resetTrigger={""}
                classnames={["SearchExpenseInput"]}
                placeholder={"Поиск по дате"}
            />
        </div>
    );
};

export default ExpensesFilterForm;