import React from "react";
import { useParams, Outlet, useOutletContext } from "react-router-dom";
import JournalEntry from "./JournalEntry";

function JournalPage() {
    const entries = useOutletContext();
    const params = useParams();

    const dateObj = new Date(params.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);
    // console.log(typeof(journalEntries.journalEntries))
    // console.log("journal entries in page", journalEntries.journalEntries)

    if (!entries){
        return <h1>Loading...</h1>
    }
    console.log("entries in journal page", entries)
    const dateEntries = entries.filter((entry) => {
        return entry.date === params.date ;
    });

    return (
        <div>
        <Outlet />
        <h1>{formattedDate}</h1>
        {dateEntries.map((entry) => {
            <JournalEntry key={entry.id} mood={entry.mood} activity={entry.activity} duration={entry.duration} description={entry.description} />
        })}

        </div>
    )
}

export default JournalPage;