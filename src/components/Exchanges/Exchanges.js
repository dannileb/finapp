import React, {useEffect, useState} from 'react';
import classes from './Exchanges.module.css'
import Exchange from "../Exchange/Exchange";
import {useFetching} from "../../hooks/useFetching";
import ExchangesService from "../../API/ExchangesService";

const Exchanges = (props) => {
    const [euro, setEuro] = useState('...');
    const [dollar, setDollar] = useState('...');

    const [fetchExchanges, error] = useFetching(async ()=>{
        const resp = await ExchangesService.getExchanges();

        setEuro(resp.euroValue);
        setDollar(resp.dollarValue);
        props.setDate(resp.date);

    })

    useEffect(()=>{
        fetchExchanges()
    },[fetchExchanges])
    return (
        <div className={classes.Exchanges}>
            {
                error.length!==0
                    ?
                <>
                    <Exchange type={"€"} value={"..."} direction={1}/>
                    <Exchange type={"$"} value={"..."} direction={1}/>
                </>
                    :
                <>
                    <Exchange type={"€"} value={euro} direction={1}/>
                    <Exchange type={"$"} value={dollar} direction={-1}/>
                </>
            }
        </div>
    );
};

export default Exchanges;