import { Module } from '@nestjs/common';
import { RegistrationController } from './controllers/registration.controller';
//import { AppService } from './app.service';

@Module({
  //imports: [],
  controllers: [RegistrationController]
  //providers: [AppService],
})
export class RegistrationModule {}

