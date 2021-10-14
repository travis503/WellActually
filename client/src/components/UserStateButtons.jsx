import React from "react";
import { Button } from '@material-ui/core';

export default function UserStateButtons(props) {
  if (props.userState === 'pending') {
    return (
      <>
        <Button onClick={() => props.updateUserState("host")}>I wanna host!</Button><br />
        <Button onClick={() => props.updateUserState("player")}>Lemme play!</Button><br />
      </>
    )
  } else {
    return null;
  }
}