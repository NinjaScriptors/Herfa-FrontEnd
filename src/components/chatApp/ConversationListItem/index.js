import React, { useEffect } from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-title', 20);
    // console.log("proppps", props.data)
  })

  const { name, _id } = props.data;

  return (
    // for the left bar >> image, name, and ...
    <div className="conversation-list-item">
      {/* <img className="conversation-photo" src={photo} alt="conversation" /> */}
      <div className="conversation-info">
        <h1 className="conversation-title" value={_id}>{name}</h1>
        {/* <p className="conversation-snippet">{text}</p> */}
      </div>
    </div >
  );
}