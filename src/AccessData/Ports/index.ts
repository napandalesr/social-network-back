import { AuthModel } from '../Repositories/Auth/Model';
import { UserModel } from './../Repositories/Users/Model/index';

export interface IUsersDataAccess {
  create: (userModel: UserModel) => void
  findByEmail: (email: string) => Promise<number>
}

export interface IAuthsDataAccess {
  auth: (authModel: AuthModel) => Object
}
