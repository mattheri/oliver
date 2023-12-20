import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  private readonly hasher = bcrypt;
  private _saltOrRounds = Number(process.env.SALT_ROUNDS) || 10;

  get saltOrRounds(): number {
    return this._saltOrRounds || 10;
  }

  set saltOrRounds(value: number) {
    this._saltOrRounds = value;
  }

  async hash(str: string): Promise<string> {
    return this.hasher.hash(str, this.saltOrRounds);
  }

  async compare(str: string, hash: string): Promise<boolean> {
    return this.hasher.compare(str, hash);
  }
}
