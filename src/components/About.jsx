import { useState } from "react";

function About() {

  // STATE: stores current about text
  const [aboutText, setAboutText] = useState(
    "This is the original About text."
  );

  // STATE: controls success message visibility
  const [showMessage, setShowMessage] = useState(false);


  // FUNCTION: runs when button clicked
  function handleUpdate() {

    // update text
    setAboutText("This is the updated About text!");

    // show message
    setShowMessage(true);
  }


  // RETURN: UI to display
  return (
    <section id = "about">

      <h2>About</h2>

      <p>{aboutText}</p>

      <button onClick={handleUpdate}>
        Update About Text
      </button>

      {showMessage && (
        <p style={{ color: "green" }}>
          Text updated successfully
        </p>
      )}

    </section>
  );
}

export default About;
