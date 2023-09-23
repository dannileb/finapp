import React, {useMemo, useState} from 'react';
import classes from './ExpensesFilterForm.module.css'
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
const ExpensesFilterForm = ({sortType, setSortType, setSearchQuery}) => {

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
                // type="date"
                // defaulvalue=''
                sendValue={getSearchInputValue}
                name={"descSearchValue"}
                resetTrigger={""}
                classnames={["SearchExpenseInput"]}
                placeholder={"Поиск по дате..."}
            />
        </div>
    );
};

export default ExpensesFilterForm;