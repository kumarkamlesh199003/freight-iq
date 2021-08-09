import { Controller, Get, Post, Body } from '@nestjs/common';
//import { AppService } from './app.service';
import { CreatePostDto } from './create-post.dto';

@Controller()
export class RegistrationController {
  //constructor(private readonly appService: AppService) {}

  @Get('/registration')
  async getHello(): Promise<string> {
    return "Registration Page";
  }

  @Post('/registration')
  create(@Body() createPostDto: CreatePostDto){
      console.log("Registration Data comming from Client Side", createPostDto);
      return createPostDto;
  }
}
