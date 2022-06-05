import { IUsersDataAccess } from './../../../AccessData/Ports/index';
import { UserDto } from './../../Controller/Users/dto/index';

export class UserAdapter {
  constructor (private readonly usersRepository: IUsersDataAccess) {}
  async create (userDto: UserDto): Promise<void> {
    return this.usersRepository.create(userDto);
  }
}
