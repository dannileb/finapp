import React from 'react';
import classes from './Select.module.css'
const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={classes.Select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {
                defaultValue
                    ?
                    <option className={classes.Option} value={"default"} disabled={true}>{defaultValue}</option>
                    :
                    <></>
            }
            {
                options.map(option =>
                    <option
                        key={option.value}
                        className={classes.Option}
                        value={option.value}>
                        {option.text}
                    </option>
                )
            }
        </select>
    );
};

export default Select;