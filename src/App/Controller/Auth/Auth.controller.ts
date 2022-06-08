import { AuthRepository } from './../../../AccessData/Repositories/Auth/auth.repository';
import { AuthAdapter } from './../../Adapter/Auth/auth.adapter';
import { IResponse } from './../../../interfaces/Response';
import { IAuth } from './../../Ports/index';
import { AuthDto } from './dto/index';

export class AuthController implements IAuth {
  async auth (authDto: AuthDto): Promise<IResponse> {
    const validateDto = new AuthDto();
    const responseValedateDto = await validateDto.vatidation(authDto);
    if (responseValedateDto.length > 0) {
      return { status: 400, data: responseValedateDto };
    }
    const authAdapter = new AuthAdapter(new AuthRepository());
    const user = await authAdapter.auth(authDto);
    // eslint-disable-next-line no-prototype-builtins
    if (user.hasOwnProperty("id")) {
      return { status: 200, data: { ...user } };
    } else {
      return { status: 400, data: { message: "El usuario no se encuentra registrado" } };
    }
  }
}
