import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Alura Challenge Backend #7- Javascript';
  }
}
