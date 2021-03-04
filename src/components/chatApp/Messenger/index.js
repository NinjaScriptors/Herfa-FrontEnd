import React, { useEffect, useState } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Toolbar from "../Toolbar/"
import ToolbarButton from "../ToolbarButton/"
// import { io } from "socket.io-client";

export default function Messenger(props) {

  let [roomId, setRoomId] = useState();
  let handleSubmit = (e) => {
    console.log(e.target.id)
    setRoomId(e.target.id)
  }
  let _changeRoomKIdInListMessages = () => {
    return roomId;
  }


  return (
    <div className="messenger">
      {/* <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog" />
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />

      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />
        ]}
      /> */}

      <div className="scrollable sidebar">
        <ConversationList handleClickedConversation={handleSubmit} />
      </div>

      <div className="scrollable content">
        <MessageList sellerId={_changeRoomKIdInListMessages} />
      </div>
    </div>
  );
}