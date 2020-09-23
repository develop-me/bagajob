import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Nav'

const AccountHeader = () => {
    const { name } = useSelector(state => state) 
    const initials = name.split(" ").map((n)=>n[0]).join(".").toUpperCase()

    return (
        <>
        <Nav />
        <div>
            <div>
                { initials } 
            </div>
            <h1>
                { name }
            </h1>
        </div>
        </>
    );
};

export default AccountHeader;