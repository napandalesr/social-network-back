import { UserModel } from './../Repositories/Users/Model/index';

export interface IUsersDataAccess {
  create: (userModel: UserModel) => void
}
