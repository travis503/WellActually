import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
        </Card><br/>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={4} sm={4} md={4} ls={4} xl={4}>
            <Button variant="outlined" style={{backgroundColor: 'white'}} onClick={() => props.getNewCard()}>Get new card!</Button><br />
          </Grid>
        </Grid>
      </>
    )
  }
  if (props.userState === 'pending') {
    return null;
  }
}