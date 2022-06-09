import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersResolver } from './users.resolvers';
import { UsersService } from './users.service';

@Module({
  providers: [PrismaService, UsersService, UsersResolver],
})
export class UsersModule {}
