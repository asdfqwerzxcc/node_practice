import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway()
export class MyWebSocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  handleConnection(client: WebSocket, ...args: any[]) {
    console.log('Client connected');
  }

  handleDisconnect(client: WebSocket) {
    console.log('Client disconnected');
  }

  @SubscribeMessage('message')
  handleMessage(client: WebSocket, payload: any): string {
    console.log('Received message:', payload);
    return `Hello from server: ${payload}`;
  }
}