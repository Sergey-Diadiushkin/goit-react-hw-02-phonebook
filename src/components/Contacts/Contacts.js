import './Contacts.css'
import React from 'react';
// import shortid from 'shortid';


const Contacts = ({ contacts, onDeleteContact }) => (
    <ul className='contactList'>
        {contacts.map(({ name, id, number }) =>
            <li className='contactListItem'  key={id}>
                {name}: {number}
                <button onClick={()=>onDeleteContact(id) }>Delete</button>
        </li>)}
    </ul>
)
 
export default Contacts;