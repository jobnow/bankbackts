import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  except_user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ except_user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findAllProvider(except_user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export default ShowProfileService;
