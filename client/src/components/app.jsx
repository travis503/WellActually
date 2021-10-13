import React from "react";
import TestCard from "./testComponent.jsx";
var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket = require('websocket').w3cwebsocket;

export default function App() {
  return (
    <>
      <div>Hello, Reacto!</div>
      <TestCard />
    </>
  )
}