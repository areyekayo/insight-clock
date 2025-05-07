import '../App.css';
import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Outlet } from 'react-router-dom';

function App() {
  const [journalEntries, setJournalEntry] = useState([]);
    
  useEffect(() => {
      fetch("http://localhost:3000/entries")
          .then((r) => r.json())
          .then((data) => setJournalEntry(data))
  }, [])

  function addNewEntry(newEntry) {
      setJournalEntry([...journalEntries, newEntry])
  }


  //create new date objects with journal entries to display as date cards
  const dateCards = journalEntries.reduce((acc, entry) => {
    //check if there's already an entry for the date
    const dateObj = acc.find(item => item.date === entry.date);
    if (dateObj) {
      //if date exists, update count, ids, activities, and moods
      dateObj.count += 1;
      dateObj.ids.push(entry.id);
      dateObj.activities.push(entry.activity);
      dateObj.moods.push(entry.mood);
      dateObj.time += Number(entry.duration);
    } else {
      acc.push({
        date: entry.date,
        count: 1,
        ids: [entry.id],
        activities: [entry.activity],
        moods: [entry.mood],
        time: Number(entry.duration)
      });
    }
    return acc;
  }, [])

  return (
      <div className="App">

          <header className="App-header">
            <h1>Mindful Journal</h1>
            <NavBar />
          </header>
            <Outlet context={{entries: journalEntries, dates: dateCards, onSubmitEntry: addNewEntry}} />
            {/* <Home dateCards={dateCards} /> 
            <JournalEntryForm onSubmitEntry={addNewEntry} /> */}
      </div>
    );
}

export default App;