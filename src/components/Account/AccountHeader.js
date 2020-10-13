import React from 'react';
import { useSelector } from 'react-redux'


const AccountHeader = () => {
    const { name } = useSelector(state => state) 
    const initials = name.split(" ").map((n)=>n[0]).join("").toUpperCase()

    return (
        <>
            <div className="account-initial">
                { initials } 
            </div>
            <h1 className="account-name">
                { name }
            </h1>
        </>
    );
};

export default AccountHeader;