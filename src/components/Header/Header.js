import React from 'react';
import classes from "./Header.module.css";
import Exchanges from "../Exchanges/Exchanges";

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <h1 className={classes.Heading}>Мои финансы</h1>
            <Exchanges setDate={props.setDate}/>
        </div>
    );
};

export default Header;