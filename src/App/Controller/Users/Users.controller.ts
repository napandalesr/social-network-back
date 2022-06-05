import { IResponse } from './../../../interfaces/Response';
import { IUsers } from './../../Ports/index';
import { UserDto } from './dto/index';

export class UserController implements IUsers {
  async create (userDto: UserDto): Promise<IResponse> {
    const validateDto = new UserDto();
    const responseValedateDto = await validateDto.vatidation(userDto);
    if (responseValedateDto.length > 0) {
      return { status: 404, data: responseValedateDto };
    }
    return { status: 200, data: userDto };
  }
}
