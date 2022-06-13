import { MinLength, MaxLength, IsNotEmpty, IsEmail } from 'class-validator';
import { NewUser } from 'src/graphql.schema';

export class CreateUser extends NewUser {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;

  avatar?: string;
}
