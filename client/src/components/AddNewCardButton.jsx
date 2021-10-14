import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const axios = require('axios');

export default function AddNewCardButton(props) {

  const [addCardButton, updateAddCardButton] = useState(false);
  const [formCard, updateFormCard] = useState({
    category: 'No category',
    cardPrompt: 'No card prompt',
    cardAnswer: 'No card answer',
  });

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
  if (props.userState === 'host') {
    if (addCardButton) {
      return (
        <>
          <form onSubmit={() => submitCard}>
            <TextField id="formCardAnswer" label="ID" name="ID" onChange={handleChange}></TextField><br />
            <TextField id="formCardCategory" label="Category" name="category" onChange={handleChange}></TextField><br />
            <TextField id="formCardPrompt" label="Prompt" name="cardPrompt" onChange={handleChange}></TextField><br />
            <TextField id="formCardAnswer" label="Answer" name="cardAnswer" onChange={handleChange}></TextField><br />
          </form>
          <Button variant="outlined" onClick={handleSubmit}>Submit card!</Button><br />
          <Button variant="outlined" onClick={() => updateAddCardButton(false)}>Stop adding cards</Button>
        </>
      )
    } else {
      return (
        <Button onClick={() => updateAddCardButton(true)}>Add cards</Button>
      )
    }
  }
  else {
    return null;
  }
}