import { Length, IsEmail, validate, ValidationError, IsString } from 'class-validator';

export class UserDto {
  @Length(3, 15)
  @IsString()
    name: string;

  @Length(7, 50)
  @IsEmail()
    email: string;

  async vatidation (userDto: UserDto): Promise<ValidationError[]> {
    const user = new UserDto();
    user.name = userDto.name;
    user.email = userDto.email;
    return await validate(user).then(errors => {
      const err = [];
      if (errors.length > 0) {
        errors.map(item => {
          return err.push({ property: item.property, ...item.constraints });
        });
      }
      return err;
    });
  }
}
