import React, {useState} from 'react';
import classes from './ExpensesFilterForm.module.css'
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";
const ExpensesFilterForm = ({setSortedExpenses, expenses}) => {
    /*TODO: - сделать общий метод который будет принимать изменения sort, filter массива expenses,
    проводить общую фильтрацию,
    создавать и изменять массив, а затем отдавать его в List.
    При этом изначально в List должен отдаваться дефолтно отсортированный массив ОТСЮДА.
    то есть массив с параметрами sort  и filter = default, и expenses - изначальные*/

    const [sortType, setSortType] = useState('all');


    const sortedExpenses = getSortedExpenses();

    function getSortedExpenses(){
        let sortedExpenses = [];

        switch (sortType){
            case "incomes":
                sortedExpenses = [...expenses.sort(
                    (a,b) => b.amount-a.amount
                )]
                break;
            case "expenses":
                sortedExpenses = [...expenses.sort(
                    (a,b) => a.amount-b.amount
                )]

                break;
            case "all":
                sortedExpenses = [...expenses.sort(
                    (a,b) => new Date(b.date) - new Date(a.date)
                )]
                break;
            default:
                break;
        }
        setSortedExpenses(sortedExpenses);
        return sortedExpenses;
    }

    function getSort(...rest){
       /* if (rest[0].option){

            setSortType(rest[0].option);
            sortExpenses(rest[0].option, searchQuery, expenses)

        }else {
            /!*if (rest.length!==0){

                setSearchQuery(filter);
                sortExpenses(filter.option, searchQuery, expenses)
            }*!/
        }
*/

    }

    const searchExpenses = (searchQuery, expenses) =>{

    }

    return (
        <></>
    );
};

export default ExpensesFilterForm;