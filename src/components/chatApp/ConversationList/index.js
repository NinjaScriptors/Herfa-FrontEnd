import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import cookie from 'react-cookies';
// import io from "socket.io-client";
import './ConversationList.css';
import { Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
let flag = true;

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  // const [flag, setFlag] = useState(true);
  const { id } = useParams()
  console.log(id, "ggggggggggggggggggggggrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  useEffect(() => {
    if (id && flag) {
      addNewChatRoom(id)
    }
    if (flag) {
      getConversations();
    }
  }, [])

  const addNewChatRoom = (id) => {

    // take the id of the user and take the another one from the localstorage 
    // send userids as a bodies 
    // post 
    let userIds = []
    userIds.push(id);
    // userIds.push(JSON.parse(localStorage.getItem("userInfo"))._id);


    axios(`https://herfa-server.herokuapp.com/room/initiate`, {
      method: "post",
      data: JSON.stringify({ userIds, type: "seller-seller" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.load('auth')}`
      }
    }).then((res) => {
      console.log("create new rooom <<<<<<<", res.data)
      getConversations();
    })

    flag = false;
  }


  const getConversations = async () => {
    console.log("inside get conversations")
    // console.log(JSON.parse(localStorage.getItem("userInfo")).token)
    axios(`https://herfa-server.herokuapp.com/room/userRooms/${JSON.parse(localStorage.getItem("userInfo"))._id}`, {
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.load('auth')}`
      }
    }).then(response => {
      console.log("all rooms of user : >>>", response.data)
      response.data.map(async (result) => { // loop over each room 
        result.userIds.map(id => {
          if (id !== (JSON.parse(localStorage.getItem("userInfo"))._id)) {
            axios(`https://herfa-server.herokuapp.com/api/users/${id}`, {
              method: "get",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.load('auth')}`
              }
            }).then(otherUserObject => {
              
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
    flag = false;
  }
  console.log(conversations)
  console.log("teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest")

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

        conversations.map((user, idx) => {
          // if (idx != conversations.length - 1) {
          return (
            <Container key={idx} >
              <Typography className="conversation-title" onClick={props.handleClickedConversation} id={user._id} key={user.name}>{user.name}</Typography>

              {/* <Typography className="conversation-title" onClick={props.handleClickedConversation} id="test" key={"test"}>{conversation.name}</Typography> */}

              {/* <ConversationListItem 
            
              key={conversation.name}
              data={conversation}
            /> */}
            </Container>
          )
          // }
        })


      }
    </div>
  );
}