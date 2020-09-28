"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/implementations/fakes/FakeCacheProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _AuthenticateUserService = _interopRequireDefault(require("./AuthenticateUserService"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AuthenticateUser', () => {
  let fakeUsersRepository;
  let fakeHashProvider;
  let authenticateUser;
  let fakeCacheProvider;
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    authenticateUser = new _AuthenticateUserService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to authenticate user', async () => {
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
    const user = await createUser.execute({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    const response = await authenticateUser.execute({
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
  it('should not be able to authenticate with non existing user', async () => {
    await expect(authenticateUser.execute({
      email: 'tgmarinho@gmail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to authenticate with wrong password', async () => {
    const createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
    await createUser.execute({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    await expect(authenticateUser.execute({
      email: 'tgmarinho@gmail.com',
      password: 'xxxxx'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});