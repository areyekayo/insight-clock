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

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>Mindful Journal</h1>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={journalEntries.map((entry) => <JournalCard key={entry.id} date={entry.date} mood={entry.mood} description={entry.description} activity={entry.activity} duration={entry.duration} />)} />
        <Route path="/newEntry" element={<JournalEntryForm onSubmitEntry={addNewEntry} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;