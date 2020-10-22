import { Server } from "http";
import WebSocket from "ws";

export default class WS {
  private wss: WebSocket.Server;

  constructor(private readonly server: Server, private readonly path: string) {
    this.wss = new WebSocket.Server({ server, path: "/ws" });
    this.wss.on("connection", (ws: WebSocket) => {
      // create new player -> handle events
      // or
      // add to registry

      ws.on("message", (action: { type: "string"; payload: any }) => {
        // registry.emit(action)
        console.log(action);
      });
      ws.send("Thanks for the message");
    });
  }
}
