import { Length, IsEmail, validate, ValidationError } from 'class-validator';

export class AuthDto {
  @Length(7, 50)
  @IsEmail()
    email: string;

  async vatidation (authDto: AuthDto): Promise<ValidationError[]> {
    const auth = new AuthDto();
    auth.email = authDto.email;
    return await validate(auth).then(errors => {
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
