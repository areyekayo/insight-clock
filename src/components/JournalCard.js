import React from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

function JournalCard({date, count, moods, activities, time }) {
    const journalEntries = useOutletContext
    const dateObj = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    return (
        <div className="card">
            <Outlet context={journalEntries} />
            <h1>{formattedDate}</h1>
            <p>{count} entries</p>
            <p>Moods: {moods}</p>
            <p>Activities: {activities}</p>
            <p>Total mindful time: {time}</p>
            <Link to={`/${date}`} >View Entries</Link>
        </div>
    )
}

export default JournalCard;