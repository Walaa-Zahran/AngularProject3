import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Adam Taylor', 'E234', 'at@abc.net'];
  info2: string[] = ['Shawn Michael', 'E235', 'at2@abc.net'];
  info3: string[] = ['Walaa Zahran', 'E236', 'at3@abc.net'];
  getinfo1(): string[] {
    return this.info1;
  }
  getinfo2(): string[] {
    return this.info2;
  }
  getinfo3(): string[] {
    return this.info3;
  }

  constructor() {}
}
