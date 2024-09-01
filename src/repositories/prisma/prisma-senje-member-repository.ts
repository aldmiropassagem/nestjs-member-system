import { PrismaService } from './../../database/prisma.service';
import { SenjeMemberRepository } from '../senje-member-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimaSenjeMemberRepository implements SenjeMemberRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.senjeTemMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
