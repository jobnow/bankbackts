import { Router } from 'express';
import multer from 'multer';
import UserCreationService from '../services/UserCreationService';
import UserAvatarUpdateService from '../services/UserAvatarUpdateService';
import UsersRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import ensureAuthentication from '../middlewares/ensureAuthentication';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', async (request, response) => {
    const usersRepository = getCustomRepository(UsersRepository);
    const appointments = await usersRepository.find();

    return response.json(appointments);
});

// usersRouter.put('/edit', async (request, response) => {
//     const { name, email, password } = request.body;

//     const updateUser = new UserUpdateService();

//     const user = await updateUser.execute({
//         name,
//         email,
//         password,
//     });

//     delete user.password;

//     return response.json(user);
// });

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = new UserCreationService();

    const user = await createUser.execute({
        name,
        email,
        password,
    });

    delete user.password;

    return response.json(user);
});

usersRouter.patch(
    '/avatar',
    ensureAuthentication,
    upload.single('avatar'),
    async (request, response) => {
        const updateUserAvatar = new UserAvatarUpdateService();

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            filename: request.file.filename,
        });

        delete user.password;

        return response.json(user);
    },
);

export default usersRouter;
