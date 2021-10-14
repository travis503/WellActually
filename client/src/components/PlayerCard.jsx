import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function PlayerCard(props) {

  const [playerScore, updatePlayerScore] = useState(0);

  return (
    <>
    <Grid container direction="column" alignItems="center" justify="center">
      <ArrowForwardIosIcon style={{transform: 'rotate(-90deg)'}} display="inline" onClick={()=>{updatePlayerScore(playerScore + 1)}} />
        <Card>
          <CardContent>
            <Typography>{playerScore}</Typography>
          </CardContent>
        </Card>
        <ArrowForwardIosIcon style={{transform: 'rotate(90deg)'}} display="inline" onClick={()=>{updatePlayerScore(playerScore - 1)}} />
        <Typography>Player {props.player}</Typography>
    </Grid>
    </>
  )
}