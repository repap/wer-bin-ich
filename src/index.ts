import config from "./utils/config";
import express from "express";
import WebSocket from "ws";
import { createServer } from "http";
import { AddressInfo } from "net";
import morgan from "morgan";

const app = express();
const server = createServer(app);

app.use(morgan("combined"));

const wss = new WebSocket.Server({ server });

app.get("/test", (req, res) => res.send("HELLO WORLD :D"));

wss.on("connection", (ws: WebSocket) => ws.send("Hello World"));

server.listen(config.PORT, () => {
  console.log(
    `Server started on port ${(server.address() as AddressInfo).port} :)`
  );
});
