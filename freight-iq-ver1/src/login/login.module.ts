import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './controllers/login.controller';
import { LoginPostEntity } from './models/post.entity';
import { LoginService } from './services/login.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoginPostEntity])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}

