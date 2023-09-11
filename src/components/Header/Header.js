import React from 'react';
import classes from "./Header.module.css";
import Exchanges from "../Exchanges/Exchanges";

const Header = () => {
    return (
        <div className={classes.Header}>
            <h1 className={classes.Heading}>Мои финансы</h1>
            <Exchanges/>
        </div>
    );
};

export default Header;