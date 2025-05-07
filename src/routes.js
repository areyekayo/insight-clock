import App from "./components/App";
import JournalEntryForm from "./components/JournalEntryForm";
import Home from "./components/Home";
import JournalPage from "./components/JournalPage";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/:date",
                        element: <JournalPage />
                    }
                ]
            },
            {
                path: "/newEntry",
                element: <JournalEntryForm />,
            },
        ]
    },
];
export default routes;