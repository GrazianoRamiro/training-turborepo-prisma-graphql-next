import prisma from '@repo/db';

class DatabaseService {
  get client() {
    return prisma;
  }
}

export const databaseService = new DatabaseService();
