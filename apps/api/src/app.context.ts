import { PrismaService } from './services/prisma.service';

export interface Context {
  prisma: PrismaService;
}

export function createContext(): Context {
  const prismaService = new PrismaService();
  return { prisma: prismaService };
}
