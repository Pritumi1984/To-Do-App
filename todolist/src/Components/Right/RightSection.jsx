import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function RightSection() {

  const [note, setNote] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  useEffect(() => {

    axios.get("https://api.quotable.io/random")
    .then(
      (response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      }
    )
    .catch((error) => console.error("Error fetching quote:", error));
  }, []
  );


  return (
    <div className="RightSection">
      <div className="right_container">

        <div className="notes">
          <h2>Notes</h2>
          <textarea 
          placeholder="Enter your notes here..."
          value={note}
          onChange={handleNoteChange}
          className="notes_input"
          />
        </div>

        <div className="quote">
          <h2>Quote of the Day</h2>
          <p className="quote_text">"{quote}"</p>
          <p className="quote_author">- {author}</p>
        </div>

        <div className="calendar">
          <h2>Calendar</h2>
          <Calendar />
        </div>

      </div>
    </div>
  );
}

export default RightSection;