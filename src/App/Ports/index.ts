import { AuthDto } from './../Controller/Auth/dto/index';
import { IResponse } from './../../interfaces/Response';
import { UserDto } from './../Controller/Users/dto/index';

export interface IUsers {
  create: (userDto: UserDto) => Promise<IResponse>
}

export interface IAuth {
  auth: (authrDto: AuthDto) => Promise<IResponse>
}
