import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { NewUser, UpdateUser } from 'src/graphql.schema';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async create(user: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
  }

  async update(params: UpdateUser): Promise<User> {
    const { id, firstName, lastName, email, password, active, avatar } = params;
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(email && { email }),
        ...(password && { password }),
        ...(active && { active }),
        ...(avatar && { avatar }),
      },
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
