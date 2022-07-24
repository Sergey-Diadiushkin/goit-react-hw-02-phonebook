import './Contacts.css'
import React from 'react';
// import shortid from 'shortid';


const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className='contactListItem'>
        {contacts.map(({ name, id, number }) =>
            <li  key={id}>
                {name}: {number}
                <button onClick={()=>onDeleteContact(id) }>Delete</button>
        </li>)}
    </ul>
)
 
export default Contacts;