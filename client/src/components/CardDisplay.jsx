import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export default function CardDisplay(props) {
  if (props.userState === 'player') {
    return (
      <Card>
        <CardContent>
          <Typography>Category: {props.currentCard.category}</Typography>
          <Typography>{props.currentCard.cardPrompt}</Typography>
        </CardContent>
      </Card>
    )
  }
  if (props.userState === 'host') {
    return(
      <>
        <Card>
          <CardContent>
            <Typography align="center" variant="h6">Category: {props.currentCard.category}</Typography><br />
            <Typography variant="body1">{props.currentCard.cardPrompt}</Typography><br />
            <Typography>Answer: {props.currentCard.cardAnswer}</Typography>
          </CardContent>
        </Card>
        <Button variant="outlined" sx={{backgroundColor: "white"}} onClick={() => props.getNewCard()}>Get new card!</Button><br />
      </>
    )
  }
  if (props.userState === 'pending') {
    return null;
  }
}