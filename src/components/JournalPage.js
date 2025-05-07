import React from "react";
import { useParams, Outlet, useOutletContext } from "react-router-dom";

function JournalPage() {
    const journalEntries = useOutletContext();
    const params = useParams();

    const dateObj = new Date(params.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    const dateEntries = journalEntries.filter((entry) => {
        return entry.date === params.date ;
    })

    console.log("date entries in Journal Page", dateEntries)
    return (
        <div>
        <Outlet />
        <h1>{formattedDate}</h1>

        </div>
    )
}

export default JournalPage;