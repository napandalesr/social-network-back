import { IResponse } from './../../interfaces/Response';
import { UserDto } from './../Controller/Users/dto/index';

export interface IUsers {
  create: (userDto: UserDto) => Promise<IResponse>
}
