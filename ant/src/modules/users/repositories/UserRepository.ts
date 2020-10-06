import { EntityRepository, Repository } from 'typeorm';
import User from '../../users/infra/typeorm/entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findById(date: Date): Promise<User | null> {
        const findUsers = await this.findOne({
            where: { date },
        });

        return findUsers || null;
    }
}

export default UsersRepository;
