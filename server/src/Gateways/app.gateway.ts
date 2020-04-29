import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('addTag')
  addTag(@MessageBody() data: Object, @ConnectedSocket() client: Socket): void {
    this.wss.emit('addTag', data);
  }

  @SubscribeMessage('editTag')
  editTag(
    @MessageBody() data: Object,
    @ConnectedSocket() client: Socket,
  ): void {
    this.wss.emit('aditTag', data);
  }

  @SubscribeMessage('removeTag')
  removeTag(
    @MessageBody() data: number,
    @ConnectedSocket() client: Socket,
  ): void {
    this.wss.emit('removeTag', data);
  }
}
