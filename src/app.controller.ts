import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMember } from './dtos/create-team-member-dto';
import { SenjeMemberRepository } from './repositories/senje-member-repository';

@Controller('app')
export class AppController {
  constructor(private senjeMemberRespository: SenjeMemberRepository) {}
  @Post('member')
  async getMember(@Body() body: CreateTeamMember) {
    const { name, function: memberFunction } = body;
    await this.senjeMemberRespository.create(name, memberFunction);
  }
}
