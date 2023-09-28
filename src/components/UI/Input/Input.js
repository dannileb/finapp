import React, {useEffect, useState} from 'react';
import classes from './Input.module.css';

const Input = ({sendValue,resetTrigger, ...props}) => {
    //Add a "classNames" props to combine custom classes
    //Add a "resetTrigger" props to reset value from parent component

    const [value, setValue] = useState('');

    //filling date on component loads
    useEffect(() => {
        if (props.type==="date"){
            if (props.defaultvalue === undefined){
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().slice(0, 10);
                sendValue(formattedDate, props.name);
                setValue(formattedDate);
            }else {
                setValue(props.defaultvalue)
            }
        }
    }, []);

    //resets input value from parent component
    useEffect(()=>{
        setValue('')
    }, [resetTrigger])

    //handles input changing
    const changeHandler = (event) =>{

        if (props.type!=="number"){
            setValue(event.target.value);
            sendValue(event.target.value, props.name);
        }else{
            setValue(event.target.value.replace(/[^0-9+-]/g, ''))
            sendValue(event.target.value.replace(/[^0-9+-]/g, ''), props.name);
        }
    }
    return (
        <input
            className={
            //if Input has custom classes
            props.classnames
                ?
                //adding this classes from Input.module.css
                classes.Input
                + " "
                + props.classnames.map(className => classes[className]).join(" ")
                :
                //else setting only "Input" class
                classes.Input
            }
            {...props}
            value={
                value
            }
            onChange={changeHandler}
        />
    );
};

export default Input;