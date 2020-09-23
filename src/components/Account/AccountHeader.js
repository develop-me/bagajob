import React from 'react';
import { useSelector } from 'react-redux'

const AccountHeader = () => {
    const { name } = useSelector(state => state) 
    
    const initials = name.split(" ").map((n)=>n[0]).join(".").toUpperCase()

    return (
        <div>
            <div>
                { initials } 
            </div>
            <h1>
                { name }
            </h1>
        </div>
    );
};

export default AccountHeader;