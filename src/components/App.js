import '../App.css';
import React, {useState, useEffect} from "react";
import JournalCard from "./JournalCard";
import JournalEntryForm from "./JournalEntryForm";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      dateObj.time += entry.duration;
    } else {
      acc.push({
        date: entry.date,
        count: 1,
        ids: [entry.id],
        activities: [entry.activity],
        moods: [entry.mood],
        time: entry.duration
      });
    }
    return acc;
  }, [])

  console.log(dateCards)

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>Mindful Journal</h1>
        <NavBar />
      </header>
      <Routes>

        <Route path="/" element={dateCards.map((dateEntry) => <JournalCard key={dateEntry.date} date={dateEntry.date} count={dateEntry.count} moods={dateEntry.moods} activities={dateEntry.activities} time={dateEntry.time} />)} />

        <Route path="/newEntry" element={<JournalEntryForm onSubmitEntry={addNewEntry} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;