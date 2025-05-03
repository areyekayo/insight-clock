import React from "react";

function JournalCard({date, count, moods, activities, time }) {

    const dateObj = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    return (
        <div className="card">
            <h1>{formattedDate}</h1>
            <p>Number of entries: {count}</p>
            <p>Moods: {moods}</p>
            <p>Activities: {activities}</p>
            <p>Total mindful time: {time}</p>

        </div>
    )
}

export default JournalCard;