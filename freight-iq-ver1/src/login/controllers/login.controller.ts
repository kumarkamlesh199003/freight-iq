import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginPost } from '../models/post.interface';
import { LoginService } from '../services/login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Get('/login')
  // async getHello(): Promise<string> {
  //   return "Login Page";
  // }
  // @Get('/login')
  // getHello(): string {
  //   return this.loginService.getHello();
  // }
  @Post('/login')
  //createPost(@Body() post: LoginPost): Observable<LoginPost> {
  create(@Body() post: LoginPost): Observable<LoginPost> {  
    console.log("Data of LoginPost", post);
    return this.loginService.createPost(post);
  }
}
