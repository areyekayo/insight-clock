import React from "react";

function JournalCard({date, mood, description, duration, activity }) {

    const dateObj = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    return (
        <div className="card">
            <h1>{formattedDate}</h1>
            <p>Mood: {mood}</p>
            <p>{activity}, {duration} minutes</p>
            <p>{description}</p>
        </div>
    )
}

export default JournalCard;