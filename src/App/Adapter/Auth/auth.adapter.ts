import { AuthDto } from './../../Controller/Auth/dto/index';
import { IAuthsDataAccess } from './../../../AccessData/Ports/index';

export class AuthAdapter {
  constructor (private readonly authRepository: IAuthsDataAccess) {}
  async auth (authDto: AuthDto): Promise<Object> {
    return this.authRepository.auth(authDto);
  }
}
