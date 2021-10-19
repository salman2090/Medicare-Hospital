import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import './Contacts.css';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    // load data
    useEffect(() => {
        fetch('./address.json')
            .then(res => res.json())
            .then(data => setContacts(data))
    })

    return (
        <div className="contacts-container">
            <h1 className="mt-5 header-text">Get in touch with us</h1> 
            <div className="contact-container">
                {
                    contacts.map(contact => <Contact
                        key={contact.key}
                        contact={contact}
                    ></Contact>
                    )
                }
            </div>
        </div>
    );
};

export default Contacts;