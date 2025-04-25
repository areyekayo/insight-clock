import React, {useState, useEffect} from "react";
import JournalCard from "./JournalCard";

function MindfulJournal() {
    const [journalEntries, setJournalEntry] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/entries")
            .then((r) => r.json())
            .then((data) => setJournalEntry(data))
    }, [])

    console.log(journalEntries)

    return (
        <div>
            {journalEntries.map((entry) => <JournalCard key={entry.id} date={entry.date} mood={entry.mood} entry={entry.entry}  />)}
        </div>
    )
};

export default MindfulJournal;