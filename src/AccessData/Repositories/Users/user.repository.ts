import { AppDataSource } from './../../../Config/DB/index';
import { UserEntity } from './Entity/index';
import { IUsersDataAccess } from './../../Ports/index';
import { UserModel } from './Model/index';

export class UserRepository implements IUsersDataAccess {
  async create (userModel: UserModel): Promise<number> {
    const userEntity = new UserEntity();
    userEntity.name = userModel.name;
    userEntity.email = userModel.email;
    await AppDataSource.manager.save(userEntity);
    return userEntity.id;
  }
}
