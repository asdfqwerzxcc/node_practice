import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'new nestjs!';
  }
  getHi(): string{
    return 'new Hello';
  }
}
