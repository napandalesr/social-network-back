import { AppDataSource } from './../../../Config/DB/index';
import { UserEntity } from './Entity/index';
import { IUsersDataAccess } from './../../Ports/index';
import { UserModel } from './Model/index';

export class UserRepository implements IUsersDataAccess {
  async create (userModel: UserModel): Promise<number> {
    const userEntity = new UserEntity();
    userEntity.name = userModel.name;
    userEntity.email = userModel.email;
    try {
      await AppDataSource.manager.save(userEntity);
    } catch (error) {
      console.log(error);
    }
    return userEntity.id;
  }

  async findByEmail (email: string): Promise<number> {
    const userRepository = AppDataSource.getRepository(UserEntity);
    const user = await userRepository.findOneBy({ email });
    if (!user) {
      return 1;
    } else {
      return 0;
    }
  }
}
