import React from "react";

export const ContactPicker = ({ contacts, handleChange }) => {
    return (
        <div>
            <label for="contact">Choose a Contact:</label>

            <select id="contact" onChange={handleChange} placeholder="Contact">
            <option value="" disabled selected>Select a contact</option>
                {contacts.map((contact) => (
                    <option value={contact.name} >{contact.name}</option>
                ))}
            </select>
        </div>
    );
};
