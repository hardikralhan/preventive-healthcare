import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./Details";
import notes from "../notes";
import Popup from "./Popup";
import DiseasesHeading from "./DiseasesHeading";

function App() {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  var temp = notes.find((note) => note.title === text);

  function handleSubmit(event) {
    const val = event.target.value;
    setText(val);
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Header />
      <DiseasesHeading />
      <input
        className="diseases-name"
        type="button"
        value="Abdominal Pain"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Asthma"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Back Pain"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Cough"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Dengue Fever"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Food Poisoning"
        onClick={handleSubmit}
      />
      <input
        className="diseases-name"
        type="button"
        value="Jaundice"
        onClick={handleSubmit}
      />
      {isOpen && (
        <Popup
          content={
            <Details
              key={temp.key}
              Title={temp.title}
              Introduction={temp.introduction}
              Symptoms={temp.symptoms}
              Causes={temp.causes}
              Diagnosis={temp.diagnosis}
              Management={temp.management}
            />
          }
          handleClose={handleSubmit}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
