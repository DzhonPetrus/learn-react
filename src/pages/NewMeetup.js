import { Navigate, useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    const firebase_url =
      "https://learn-react-5ce60-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json";

    fetch(firebase_url, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
