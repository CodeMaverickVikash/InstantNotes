import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Notes from "./Notes";

export default function Home(props) {
  const { showAlert } = props;
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history.push("/login");
    }
  });

  return (
    <>
      <AddNote showAlert={showAlert} />
      <Notes notes={notes} showAlert={showAlert} />
    </>
  );
}
