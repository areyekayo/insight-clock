import JournalCard from "./JournalCard";
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
    const {dates, entries } = useOutletContext();
    return (
        <div>
            <Outlet context={entries} />
          {dates.map((dateEntry) => (
            <div key={dateEntry.date}>
                <JournalCard
                  date={dateEntry.date}
                  count={dateEntry.count}
                  moods={dateEntry.moods}
                  activities={dateEntry.activities}
                  time={dateEntry.time}
                />
            </div>
          ))}
        </div>
      );
};

export default Home;