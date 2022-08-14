import React, { useState } from "react";
import Box from "./Box";

function Details(props) {
  const [open, setOpen] = useState(true);
  const [area, setArea] = useState("Introduction");
  if (area === "Introduction") {
    var introd = props.Introduction;
    var type = "Introduction";
    console.log(props.Introduction);
  } else if (area === "Symptoms") {
    var introd = props.Symptoms;
  } else if (area === "Causes") {
    var introd = props.Causes;
  } else if (area === "Diagnosis") {
    var introd = props.Diagnosis;
  } else if (area === "Management") {
    var introd = props.Management;
  }

  function handleBoxClick(e) {
    const val = e.target.value;
    setArea(val);
  }

  return (
    <div className="popup-box-layout">
      <h1>{props.Title}</h1>
      <div className="buttons-layout">
        <div className="btn">
          <input
            className="popup-buttons"
            type="button"
            value="Introduction"
            onClick={handleBoxClick}
          />
        </div>
        <div className="btn">
          <input
            className="popup-buttons"
            type="button"
            value="Symptoms"
            onClick={handleBoxClick}
          />
        </div>
        <div className="btn">
          <input
            className="popup-buttons"
            type="button"
            value="Causes"
            onClick={handleBoxClick}
          />
        </div>
        <div className="btn">
          <input
            className="popup-buttons"
            type="button"
            value="Diagnosis"
            onClick={handleBoxClick}
          />
        </div>
        <div className="btn">
          <input
            className="popup-buttons"
            type="button"
            value="Management"
            onClick={handleBoxClick}
          />
        </div>
      </div>
      {open && (
        <Box
          // {area==="introduction"?{intro = {props.introduction}}:""}
          Introduction={introd}
          type={type}
          // introduction={props.introduction}
          // symptoms={props.symptoms}
          // causes={props.causes}
          // diagnosis={props.diagnosis}
          // management={props.management}
        />
      )}
    </div>

    // <div className="">
    //   <h1>{props.title}</h1>
    //   <p>Introduction</p>
    //   <p>{props.introduction}</p>
    // </div>
  );
}

export default Details;
