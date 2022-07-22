import React, { Component } from 'react';
// import shortid from 'shortid';


const Contacts = ({ contacts }) => (
    <ul>
        {contacts.map(({ name, id, number }) =>
            <li key={id}>
            {name}: {number}
        </li>)}
    </ul>
)
 
export default Contacts;