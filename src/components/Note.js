import React, { useState, useEffect } from "react";

const Note = (props) => {
  const [title, setTitle] = useState("Note Title");
  const [content, setContent] = useState("Note Content");
  const [date, setDate] = useState("TBD");
  const handleTitleChange = (value) => setTitle(value);
  const handleContentChange = (value) => setContent(value);
  const getToday = () => {
    const d = new Date();
    const curr_date = d.getDate();
    let curr_month = d.getMonth();
    curr_month++;
    var curr_year = d.getFullYear();
    return `${curr_month}/${curr_date}/${curr_year}`;
  };

  // this will be used to time stamp the note for last known edit. Possibly track edits and snapshot note content in Firebase
  useEffect(() => {
    const today = getToday();
    setDate(today);
  }, []);

  return (
    <div className="note">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="note-title">{date}</label>
        <input
          name="note-title"
          placeholder={title}
          type="text"
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        {/* Save note on submit - this will be connected to a remote database such as Firebase */}
        <label htmlFor="note-content">
          <textarea
            name="note-content"
            cols="30"
            rows="10"
            onChange={(e) => handleContentChange(e.target.value)}
            value={content}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default Note;
