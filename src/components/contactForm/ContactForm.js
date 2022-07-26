import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={({target})=> setName(target.value)}
            ></input>
            <label for="phone">Phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                placeholder="phone"
                onChange={({target})=> setPhone(target.value)}
            ></input>
            <label for="email">Email</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                onChange={({target})=> setEmail(target.value)}
            ></input>
            <button type="submit">Submit</button>
        </form>
    );
};
