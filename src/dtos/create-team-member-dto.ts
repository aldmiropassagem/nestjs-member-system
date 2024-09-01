import { IsNotEmpty } from 'class-validator';

export class CreateTeamMember {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty({
    message: 'The member function should not be empty',
  })
  function: string;
}
