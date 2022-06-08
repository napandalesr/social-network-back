import { UserEntity } from './../Users/Entity/index';
import { AppDataSource } from './../../../Config/DB/index';
import { IAuthsDataAccess } from './../../Ports/index';
import { AuthModel } from './Model/index';

export class AuthRepository implements IAuthsDataAccess {
  async auth (authModel: AuthModel): Promise<Object> {
    const userRepository = AppDataSource.getRepository(UserEntity);
    const user = await userRepository.findOneBy({
      email: authModel.email
    });
    return { ...user };
  }
}
