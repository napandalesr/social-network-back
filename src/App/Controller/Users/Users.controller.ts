import { UserRepository } from './../../../AccessData/Repositories/Users/user.repository';
import { UserAdapter } from './../../Adapter/User/index.adapter';
import { IResponse } from './../../../interfaces/Response';
import { IUsers } from './../../Ports/index';
import { UserDto } from './dto/index';

export class UserController implements IUsers {
  async create (userDto: UserDto): Promise<IResponse> {
    const validateDto = new UserDto();
    const responseValedateDto = await validateDto.vatidation(userDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const userAdapter = new UserAdapter(new UserRepository());
    const userValidate = await userAdapter.finByEmail(userDto.email);
    if (userValidate === 0) {
      return { status: 400, data: { message: "El usuario ya se encuentra registrado" } };
    }
    const idUser = await userAdapter.create(userDto);
    return { status: 200, data: { id: idUser, ...userDto } };
  }
}
