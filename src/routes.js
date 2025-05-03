import App from "./components/App";
import MindfulJournal from "./components/MindfulJournal";
import JournalEntryForm from "./components/JournalEntryForm";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/journal",
        element: <MindfulJournal />,
    },
    {
        path: "/newEntry",
        element: <JournalEntryForm />
    }

];

export default routes;