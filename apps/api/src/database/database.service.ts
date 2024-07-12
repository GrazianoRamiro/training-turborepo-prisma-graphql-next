import { Injectable } from '@nestjs/common';
import prisma from '@repo/db';

@Injectable()
export class DatabaseService {
  get client() {
    return prisma;
  }
}
