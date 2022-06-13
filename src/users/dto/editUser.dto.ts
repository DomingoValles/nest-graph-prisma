import { MinLength, MaxLength, IsNotEmpty, IsEmail } from 'class-validator';
import { UpdateUser } from 'src/graphql.schema';

export class EditUser extends UpdateUser {
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
