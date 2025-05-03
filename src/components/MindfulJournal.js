import React, {useState, useEffect} from "react";
import JournalCard from "./JournalCard";
import JournalEntryForm from "./JournalEntryForm";

function MindfulJournal() {
    const [journalEntries, setJournalEntry] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/entries")
            .then((r) => r.json())
            .then((data) => setJournalEntry(data))
    }, [])

    function addNewEntry(newEntry) {
        setJournalEntry([...journalEntries, newEntry])
    }

    

    return (
        <>
        <div>
            <JournalEntryForm onSubmitEntry={addNewEntry} />
        </div>
        <div>
            {journalEntries.map((entry) => <JournalCard key={entry.id} date={entry.date} mood={entry.mood} description={entry.description} activity={entry.activity} duration={entry.duration} />)}
        </div>
        </>
    )
};

export default MindfulJournal;