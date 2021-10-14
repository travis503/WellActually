import React, { useState, useEffect } from "react";
import TestCard from "./testComponent.jsx";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import UserStateButtons from './UserStateButtons.jsx';
import CardDisplay from './CardDisplay.jsx';
import AddNewCardButton from './AddNewCardButton.jsx';
import PlayerCard from './PlayerCard.jsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const axios = require('axios');

// var WebSocketServer = require('websocket').server;
// var WebSocketClient = require('websocket').client;
// var WebSocketFrame  = require('websocket').frame;
// var WebSocketRouter = require('websocket').router;
// var W3CWebSocket = require('websocket').w3cwebsocket;

export default function App() {
  const [userState, updateUserState] = useState('host');
  const [currentCard, updateCurrentCard] = useState({
    category: 'Star Wars',
    cardPrompt: 'In Star Wars, Han Solo\'s confrontation with Greedo the Rodian ended spectacularly when Greedo missed a blaster shot at Han, who responded with lethal accuracy.',
    cardAnswer: 'Han shot first!',
  });

  useEffect(() => {
    console.log('User state: ', userState);
  }, [userState]);

  var getNewCard = () => {
    axios.get('/newCard')
    .then((newCardData) => {
      console.log('Received card data: ', newCardData);
      updateCurrentCard({
        category: newCardData.data.category,
        cardPrompt: newCardData.data.cardPrompt,
        cardAnswer: newCardData.data.cardAnswer,
      })
    })
    .catch((error) => {
      console.log('Error getting new card: ', error);
    })
  }

  return (
    <>
      <Container>
        <Typography variant="h1" align='center'>Well, Technically...!</Typography><br/>
        <UserStateButtons userState={userState} updateUserState={updateUserState} />
        <CardDisplay userState={userState} currentCard={currentCard} getNewCard={getNewCard} />
        <AddNewCardButton userState={userState} />
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={4} sm={4} md={4} ls={4} xl={4}>
            <PlayerCard player={1} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} ls={4} xl={4}>
            <PlayerCard player={2} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} ls={4} xl={4}>
            <PlayerCard player={3} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}