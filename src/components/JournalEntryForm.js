import React, {useState} from "react";

function JournalEntryForm({onSubmitEntry}) {
    const [newEntry, setNewEntry] = useState({
        date: "",
        mood: "",
        activity: "",
        duration: 0,
        description: ""
    });

    function handleChange(event){
        setNewEntry({
            ...newEntry,
            [event.target.name]: event.target.value,
        })
    };

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEntry)
        })
        .then((r) => r.json())
        .then((newEntry) => onSubmitEntry(newEntry))
    }

    return (
        <div className="new-entry-form">
            <h2>Add Journal Entry</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="mood" placeholder="Mood" onChange={handleChange} value={newEntry.mood} />
                <input type="text" name="activity" placeholder="Activity" onChange={handleChange} value={newEntry.activity} />
            </form>
        </div>
    )
}

export default JournalEntryForm