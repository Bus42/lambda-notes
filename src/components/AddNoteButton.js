import React, { useState } from "react";

const AddNoteButton = (props) => {
  const [active, setActive] = useState(false);
  return <button id="add-note_button" onClick={(e) => {
      e.preventDefault();
      active ? setActive(false) : setActive(true);
  }} >Add Note</button>;
};

export default AddNoteButton;
