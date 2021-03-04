import React, { useState } from 'react';
import './Compose.css';

export default function Compose(props) {
  let [message, setMessage] = useState("");
  let handleMessageChange = (e) => {
    setMessage(e.target.value)
  }


  return (
    <div className="compose">
      <form style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset()
          props.helper(message);
        }}>
        <input
        onChange={handleMessageChange}
          style={{ width: "100%" }}
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />
      </form>
      {
        props.rightItems
      }
    </div>
  );
}