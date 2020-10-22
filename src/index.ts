import config from "./utils/config";
import express from "express";
import { createServer } from "http";
import { AddressInfo } from "net";
import morgan from "morgan";
import WS from "./services/Websocket";
import { createStore } from "redux";
import rootReducer from "./store";

const app = express();
const server = createServer(app);

const store = createStore(rootReducer);

app.use(morgan("combined"));
const wss = new WS(server, "/ws");
app.get("/test", (req, res) => res.send("HELLO WORLD :D"));

server.listen(config.PORT, () =>
  console.log(
    `Server started on port ${(server.address() as AddressInfo).port} :)`
  )
);

/*

game
    controller
    model

room
    controller
    model

player
    controller
      listener
      emitter
    model

services
    websocket
    eventBus

decorators
    events

*/
