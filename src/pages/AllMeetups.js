import { useState, useEffect } from "react";

import DUMMY_DATA from "./meetups.json";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const firebase_url =
    "https://learn-react-5ce60-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json";

  useEffect(() => {
    fetch(firebase_url)
      .then((response) => response.json())
      .then((data) => {
        const meetups=[];
        for (const key in data){
          const meetup = {
            id:key,
            ...data[key]
          }

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

 if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
