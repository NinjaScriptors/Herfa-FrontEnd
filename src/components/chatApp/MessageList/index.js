import React, { useEffect, useState } from 'react';
import axios from "axios"
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import cookie from 'react-cookies';
import { io } from "socket.io-client";
import './MessageList.css';







export default function MessageList(props) {
  const [messages, setMessages] = useState([])
  let [roomidd, setRoomId] = useState("");
  let [generalSellerId, setSellerId] = useState("");
  let myId = JSON.parse(localStorage.getItem("userInfo"))._id




  async function getConversations(sellerId) {
    // console.log(sellerId)
    if (sellerId) { // to avoid hitting the API when there is no conversation clicked 
      let userRooms = await axios({
        method: 'get',
        url: `https://herfa-server.herokuapp.com/room/userRooms/${sellerId}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.load('auth')}`

        }
      })

      let room = userRooms.data.filter(ele => {
        console.log(ele.userIds)
        if (ele.userIds.includes(sellerId) && ele.userIds.includes(myId)) return true;
      })

      console.log("roooom of these two sweet users", room[0]._id);
      setRoomId(room[0]._id)

      let userConversation = await axios({
        method: 'get',
        url: `https://herfa-server.herokuapp.com/room/${room[0]._id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie.load('auth')}`

        }
      })
      let tempMessages = [];
      let msgs = userConversation.data.conversation.map((message, idx) => {
        // auther = message.postedByUser == myId ? myId : "otheruser";
        tempMessages.push({ id: message._id, message: message.message.messageText, auther: message.postedByUser, timestamp: new Date().getTime() })
        return message
      })
      
      setMessages([...tempMessages])
     
      // if (!userRooms) {
      //   let userRooms = await axios({
      //     method: 'post',
      //     url: `http://localhost:4000/room/initiate`,
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Credentials": true,
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${cookie.load('auth')}`

      //     },
      //     data: {
      //       "userIds": [
      //         sellerId.toString, (JSON.parse(localStorage.getItem("userInfo"))._id).toString()
      //       ],
      //       "type": "seller-seller",
      //       "chatInitiator": sellerId.toString()
      //     }
      //   })
      //   console.log(userRooms)
      // }
    }
  }

  let socket;
  socket = io("https://herfa-server.herokuapp.com")
  socket.on("connect", () => {
    console.log("conneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeected")
  })
  socket.on("new message", (payload) => {
    getConversations(generalSellerId)
    console.log("new message posteeeeed", payload)
  })
  // const getMessages = () => {
  //   var tempMessages = [
  //     {
  //       id: 1,
  //       author: 'apple',
  //       message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 2,
  //       author: 'orange',
  //       message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 3,
  //       author: 'orange',
  //       message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 4,
  //       author: 'apple',
  //       message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 5,
  //       author: 'apple',
  //       message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 6,
  //       author: 'apple',
  //       message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 7,
  //       author: 'orange',
  //       message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 8,
  //       author: 'orange',
  //       message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 9,
  //       author: 'apple',
  //       message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 10,
  //       author: 'orange',
  //       message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
  //       timestamp: new Date().getTime()
  //     },
  //   ]



  //   console.log("user2 id >>>", props)



  //   // setMessages([...messages, ...tempMessages])
  // }
  useEffect(async () => {
    console.log('user2 id chaged', props.sellerId())
    setSellerId(props.sellerId())
    await getConversations(props.sellerId())



  }, [props.sellerId])

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      // console.log(typeof current.auther) // message.postedByUser
      // console.log(typeof myId)

      let isMine = current.auther == myId ? true : false
      console.log(isMine)
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  let postMessage = async (message) => {
    console.log("messssssssssssssaaaaaaaaaaaaaaaaaggggggggge", message)
    let postnewmessage = await fetch(`https://herfa-server.herokuapp.com/room/${roomidd}/message`, {
      method: 'post',
      mode: "cors",
      body: JSON.stringify({ messageText: message }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.load('auth')}`

      }

    })



  }

  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>

      <Compose helper={postMessage} rightItems={[
        <ToolbarButton key="photo" icon="ion-ios-camera" />,
        <ToolbarButton key="image" icon="ion-ios-image" />,
        <ToolbarButton key="audio" icon="ion-ios-mic" />,
        <ToolbarButton key="money" icon="ion-ios-card" />,
        <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
        <ToolbarButton key="emoji" icon="ion-ios-happy" />
      ]} />
    </div>
  );
}