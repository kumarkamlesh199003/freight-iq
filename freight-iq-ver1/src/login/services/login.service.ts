import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { LoginPostEntity } from '../models/post.entity';
import { LoginPost } from '../models/post.interface';

@Injectable()
export class LoginService {
  // getHello(): string {
  //   return 'Login Page';
  // }
  constructor(
    @InjectRepository(LoginPostEntity)
    private readonly loginPostRepository: Repository<LoginPostEntity>
  ) {}

  createPost( loginPost: LoginPost ): Observable<LoginPost> {
    //console.log("dataaaaaa", loginPost);
    return from(this.loginPostRepository.save(loginPost));
    //return this.loginPostRepository.update(loginPost);
    //return this.loginPostRepository.find(loginPost);

  }

}
