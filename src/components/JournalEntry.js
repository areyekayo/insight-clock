

function JournalEntry({mood, activity, duration, description}){

    return (
        <div>
            <p>Mood: {mood}</p>
            <p>Activity: {activity}</p>
            <p>Duration: {duration}</p>
            <p>{description}</p>
        </div>
    )
};

export default JournalEntry