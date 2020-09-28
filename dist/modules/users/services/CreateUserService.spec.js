"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/implementations/fakes/FakeCacheProvider"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CreateUser', () => {
  let fakeUsersRepository;
  let fakeHashProvider;
  let fakeCacheProvider;
  let createUserService;
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    createUserService = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
  });
  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('password');
    expect(user.email).toBe('tgmarinho@gmail.com');
  });
  it('should not be able to create new user with the same email from another', async () => {
    const inputUser = {
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    };
    await createUserService.execute(inputUser);
    await expect(createUserService.execute(inputUser)).rejects.toBeInstanceOf(_AppError.default);
  });
});