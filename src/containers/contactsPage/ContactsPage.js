import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
    /*
  Define state variables for 
  contact info and duplicate check
  */

    let [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [duplicate, setduplicate] = useState(false);
    let c = [
        '{ name: "aa", phone: "bb", email: "ee" }',
        '{ name: "aa2", phone: "bb2", email: "ee2" }',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setname(e.target.name.value);
        if (duplicate === false && name) {
            addContact(name, phone, email);
            e.target.name.value = "";
            e.target.phone.value = "";
            e.target.email.value = "";
        }
    };
    useEffect(() => {
        setduplicate(false);
        contacts.forEach((contact) => {
            if (contact.name === name) {
                setduplicate(true);
            }
        });
    }, [contacts, name]);

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setName={setname}
                    phone={phone}
                    setPhone={setphone}
                    email={email}
                    setEmail={setemail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList arr={c} />
            </section>
        </div>
    );
};
