import React, { useState } from "react";

/**
 * @description
 * @state
 * Clicking the bell should reveal a dropdown that allows them to modify the "state" of the icon
 * 1. Personalized - Personalized Bell
 * 2. AllBELL- All Bell
 * 3. None 
 */

const subscribedBTNgroup = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const subscribedIcon = {
  padding: "0px 15px",
  width:"24px",
  height:"24px",
}


export const IconBell = (props) =>  {
  let viewBox = "0 0 24 24";
  if(props.type===true)  viewBox = "0 0 24 24";

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" style={subscribedIcon} viewBox={viewBox} fill="currentColor"pointerEvents="none">
      { 
        props.type == true  ? 
          <>
            <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" className="style-scope yt-icon"></path>    
          </>
        : 
          <>
          
            <g className="style-scope yt-icon">
              <path fill="none" d="M0 0h24v24H0z" className="style-scope yt-icon"></path>
              <path d="M12.1 21.5c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm5.75-3H4.1v-1l2-2v-5c0-1.212.244-2.352.702-3.327L4 4.3 5.3 3l3.093 3.172c.417.416.907.928.907.928l11.8 12.1-1.3 1.3-1.95-2zM8.376 8.788A5.581 5.581 0 008.1 10.5v6h7.799L8.377 8.788zM18.1 13.7l-2-2.1v-1.1c0-2.5-1.5-4.5-4-4.5-.5 0-.9.1-1.3.2L9.3 4.7c.4-.2.8-.4 1.3-.5v-.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.7c2.9.7 4.5 3.2 4.5 6.3v3.2z" className="style-scope yt-icon"></path>
            </g>
          </>
      }

    </svg>
    </>
  );
}




export const AllBELL = () => {
  return (
    <svg
      className="style-scope yt-icon"
      display="block"
      pointerEvents="none"
      viewBox="0 0 24 24"
      style={subscribedIcon}
    >
      <g className="style-scope yt-icon">
        <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" className="style-scope yt-icon"></path>
      </g>
    </svg>
  );
}

export const PersonalizedBell = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={subscribedIcon}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z"></path>
      <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z"></path>
    </svg>
  );
}

export const ClosedBell = () => {
  return (
    <svg
      className="style-scope yt-icon"
      display="block"
      pointerEvents="none"
      viewBox="0 0 24 24"
      style={subscribedIcon}
    >
      <g className="style-scope yt-icon">
        <path fill="none" d="M0 0h24v24H0z" className="style-scope yt-icon"></path>
        <path d="M12.1 21.5c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm5.75-3H4.1v-1l2-2v-5c0-1.212.244-2.352.702-3.327L4 4.3 5.3 3l3.093 3.172c.417.416.907.928.907.928l11.8 12.1-1.3 1.3-1.95-2zM8.376 8.788A5.581 5.581 0 008.1 10.5v6h7.799L8.377 8.788zM18.1 13.7l-2-2.1v-1.1c0-2.5-1.5-4.5-4-4.5-.5 0-.9.1-1.3.2L9.3 4.7c.4-.2.8-.4 1.3-.5v-.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.7c2.9.7 4.5 3.2 4.5 6.3v3.2z" className="style-scope yt-icon"></path>
      </g>
    </svg>
  );
}
