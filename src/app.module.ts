import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { SenjeMemberRepository } from './repositories/senje-member-repository';
import { PrimaSenjeMemberRepository } from './repositories/prisma/prisma-senje-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: SenjeMemberRepository,
      useClass: PrimaSenjeMemberRepository,
    },
  ],
})
export class AppModule {}
