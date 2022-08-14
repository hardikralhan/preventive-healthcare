import React from "react";
export default function Box(props) {
  // function check(){
  //   if(props.type==="Introduction"){
  //     return props.introduction[0];
  //   }else{
  //     return props.introduction[0];
  //   }
  // }
  if (props.type === "Introduction") {
    return (
      <div className="down-box box">
        <p>{props.Introduction}</p>
      </div>
    );
  }
  return (
    <div className="down-box box">
      {props.Introduction.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}
