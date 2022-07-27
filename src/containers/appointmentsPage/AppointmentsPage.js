import React from "react";
import { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
    appointments,
    contacts,
    addAppointment,
}) => {
  const [title,setTitle]=useState("");
  const [contact,setContact]=useState("");
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");


    /*
  Define state variables for 
  appointment info
  */

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment(title, contact, date, time);
        e.target.title.value='';
        e.target.date.value='';
        e.target.time.value='';
        /*
    Add contact info and clear data  
    */
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm 
                contacts={contacts}
                title={title}
                setTitle={setTitle}
                contact={contact}
                setContact={setContact}
                date={date} 
                setDate={setDate} 
                time={time}
                setTime={setTime}
                handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList arrOfData={appointments}/>
            </section>
        </div>
    );
};
