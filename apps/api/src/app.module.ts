import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './services/prisma.service';
import { schema } from './graphql/schema';
import { createContext } from './app.context';

import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema,
      context: createContext,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [join(__dirname, '../../../.env')],
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
