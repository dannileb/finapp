import React, {useEffect, useState} from 'react';
import classes from './Input.module.css';

const Input = ({sendValue,resetTrigger, ...props}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (props.type==="date"){
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().slice(0, 10);
            sendValue(formattedDate, props.name);
            setValue(formattedDate);
        }
    }, []);

    useEffect(()=>{
        setValue('')
    }, [resetTrigger])

    const changeHandler = (event) =>{

        sendValue(event.target.value, props.name);

        if (props.type!=="number"){
            setValue(event.target.value);
        }else{
            setValue(event.target.value.replace(/[^0-9+-]/g, ''))

        }
    }
    return (
        <input
            className={classes.Input}
            {...props}
            value={value}
            onChange={changeHandler}
        />
    );
};

export default Input;