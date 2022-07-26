import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
    /*
  Define state variables for 
  contacts and appointments 
  */
    const [contacts, setcontacts] = useState([]);
    const [appointments, setappointments] = useState([]);

    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };

    /*
  Implement functions to add data to
  contacts and appointments
  */
    const addContact = (name, phone, email) => {
        let newcontacts = [...contacts];
        newcontacts.push({
            'name':name,
            'phone':phone,
            'email':email,
        });

    };
    const addAppointment = (title, contact, date, time) => {
        let newappointments = [...appointments];
        newappointments.push({
            'title': title,
            'contact': contact,
            'date': date,
            'time': time,
        });
        setappointments(newappointments);
    };
    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS} />
                        {/*     "/contacts"   */}
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        {" "}
                        {/*     "/contacts"   */}
                        {/* Add props to ContactsPage */}
                        <ContactsPage
                            contacts={contacts}
                            addContact={addContact}
                        />
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        {/*     "/appointments"  */}
                        {/* Add props to AppointmentsPage */}
                        <AppointmentsPage
                            appointments={appointments}
                            contacts={contacts}
                            addAppointment={addAppointment}
                        />
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
