import React, { useState, useEffect } from "react";
import TestCard from "./testComponent.jsx";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const axios = require('axios');

// var WebSocketServer = require('websocket').server;
// var WebSocketClient = require('websocket').client;
// var WebSocketFrame  = require('websocket').frame;
// var WebSocketRouter = require('websocket').router;
// var W3CWebSocket = require('websocket').w3cwebsocket;

export default function App() {
  const [userState, updateUserState] = useState('pending');
  const [currentCard, updateCurrentCard] = useState({
    category: 'No card selected',
    cardPrompt: 'No card prompt',
    cardAnswer: 'No card answer',
  });

  useEffect(() => {
    console.log('User state: ', userState);
  }, [userState]);

  var getNewCard = () => {
    axios.get('/newCard')
    .then((newCardData) => {
      console.log('Received card data: ', newCardData);
      updateCurrentCard({
        category: newCardData.data.testCard.category,
        cardPrompt: newCardData.data.testCard.cardPrompt,
        cardAnswer: newCardData.data.testCard.cardAnswer,
      })
    })
    .catch((error) => {
      console.log('Error getting new card: ', error);
    })
  }

  return (
    <>
      <Button onClick={() => updateUserState("host")}>I wanna host!</Button><br />
      <Button onClick={() => updateUserState("player")}>Lemme play!</Button><br />

      <Card>
        <CardContent>
          <Typography>Category: {currentCard.category}</Typography>
          <Typography>{currentCard.cardPrompt}</Typography>
          <Typography>Answer: {currentCard.cardAnswer}</Typography>
        </CardContent>
      </Card>
      <Button onClick={() => getNewCard()}>Get new card!</Button>
    </>
  )
}