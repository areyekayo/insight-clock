import App from "./components/App";
import JournalEntryForm from "./components/JournalEntryForm";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/newEntry",
                element: <JournalEntryForm />,
            }
        ]
    }
];

export default routes;