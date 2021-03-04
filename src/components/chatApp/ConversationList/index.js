import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import cookie from 'react-cookies';
// import io from "socket.io-client";
import './ConversationList.css';
import { Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core';



export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    //   // let socket = io("https://localhost:4000")
    getConversations()
  }, [])

  const getConversations = async () => {
    console.log("inside get conversations")
    // console.log(JSON.parse(localStorage.getItem("userInfo")).token)
    axios(`http://localhost:4000/room/userRooms/${JSON.parse(localStorage.getItem("userInfo"))._id}`, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.load('auth')}`
      }
    }).then(response => {
      console.log("all rooms of user : >>>", response.data)
      let newConversations = response.data.map(async (result) => { // loop over each room 
        let otherUserId = result.userIds.map(id => {
          if (id != (JSON.parse(localStorage.getItem("userInfo"))._id)) {
            axios(`https://herfa-server.herokuapp.com/api/users/${id}`, {
              method: "get",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.load('auth')}`
              }
            }).then(otherUserObject => {
              console.log("conversation ", otherUserObject)
              let arr = [];
              conversations.push(otherUserObject.data)
              setConversations([...conversations])
              // console.log(conversations)
              return otherUserObject.fullName;
            })

          }
        })


      });
      // setConversations([...conversations])

    });
  }
  console.log(conversations)


  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog" />
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />
      <ConversationSearch />
      {

        conversations.map(user => {
          console.log(props)
          return (
            <Container >
              <Typography className="conversation-title" onClick={props.handleClickedConversation} id={user._id} key={user.name}>{user.name}</Typography>

              {/* <Typography className="conversation-title" onClick={props.handleClickedConversation} id="test" key={"test"}>{conversation.name}</Typography> */}

              {/* <ConversationListItem 
            
              key={conversation.name}
              data={conversation}
            /> */}
            </Container>
          )
        })


      }
    </div>
  );
}