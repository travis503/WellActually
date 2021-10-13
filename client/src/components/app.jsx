import React, { useState, useEffect } from "react";
import TestCard from "./testComponent.jsx";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const axios = require('axios');

// var WebSocketServer = require('websocket').server;
// var WebSocketClient = require('websocket').client;
// var WebSocketFrame  = require('websocket').frame;
// var WebSocketRouter = require('websocket').router;
// var W3CWebSocket = require('websocket').w3cwebsocket;

export default function App() {
  const [userState, updateUserState] = useState('pending');
  const [currentCard, updateCurrentCard] = useState({
    category: 'No category',
    cardPrompt: 'No card prompt',
    cardAnswer: 'No card answer',
  });

  const [formCard, updateFormCard] = useState({
    category: 'No category',
    cardPrompt: 'No card prompt',
    cardAnswer: 'No card answer',
  });

  // const [formPrompt, updateFormPrompt] = useState({
  //   cardPrompt: 'No card prompt',
  // });

  // const [formAnswer, updateFormAnswer] = useState({
  //   cardAnswer: 'No card answer',
  // });


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

  const handleChange = (event) => {
    updateFormCard(
      {
      ...formCard,
      [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit = () => {
    console.log('Submitting new card: ', formCard);
    axios.post('/addCard', formCard)
    .then((response) => {
      console.log('Card posted!');
    })
    .catch((error) => {
      console.log('Card failed to post: ', error);
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

      <form onSubmit={() => submitCard}>
        <TextField id="formCardCategory" label="Category" name="category" onChange={handleChange}></TextField><br />
        <TextField id="formCardPrompt" label="Prompt" name="cardPrompt" onChange={handleChange}></TextField><br />
        <TextField id="formCardAnswer" label="Answer" name="cardAnswer" onChange={handleChange}></TextField><br />
      </form>
      <Button onClick={handleSubmit}>Submit card!</Button>
    </>
  )
}