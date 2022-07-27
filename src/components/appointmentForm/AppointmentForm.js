import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
}) => {
    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };
    const handleContactChange=(e)=>{
        let contactName=e.target.value;
        setContact(contactName);

    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="title">Title</label>
            <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter title"
                onChange={({ target }) => setTitle(target.value)}
            ></input>
            <label for="date">date</label>
            <input
                id="date"
                type="date"
                min={getTodayString()}
                name="date"
                placeholder="Enter date"
                onChange={({ target }) => setDate(target.value)}
            ></input>
            <label for="time">time</label>
            <input
                id="time"
                type="time"
                name="time"
                placeholder="Enter time"
                onChange={({ target }) => setTime(target.value)}
            ></input>
            <ContactPicker contacts={contacts} handleChange={handleContactChange} />
            <button type="submit">Submit</button>
        </form>
    );
};
