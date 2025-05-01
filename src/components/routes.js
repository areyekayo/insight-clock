import App from "./App";
import MindfulJournal from "./MindfulJournal";
import JournalEntryForm from "./JournalEntryForm";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/journal",
        element: <MindfulJournal />,
        children: [
            {
                path: "/entry/:id",
                element: <JournalPage />
            }
        ]
    },
    {
        path: "/newEntry",
        element: <JournalEntryForm />
    }

];

export default routes;