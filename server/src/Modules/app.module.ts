import { Module } from '@nestjs/common';
import { AppGateway } from '../Gateways/app.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
