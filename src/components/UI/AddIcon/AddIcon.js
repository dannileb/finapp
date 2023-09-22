import React from 'react';

const AddIcon = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M32 58.6666C46.7276 58.6666 58.6667 46.7276 58.6667 32C58.6667 17.2724 46.7276 5.33331 32 5.33331C17.2724 5.33331 5.33337 17.2724 5.33337 32C5.33337 46.7276 17.2724 58.6666 32 58.6666Z" stroke={color} strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3334 32H42.6667" stroke={color} strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 21.3333V42.6666" stroke={color} strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default AddIcon;