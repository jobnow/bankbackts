"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _UpdateProfileService = _interopRequireDefault(require("./UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('UpdateUserAvatar', () => {
  let fakeUsersRepository;
  let fakeHashProvider;
  let updateProfile;
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    updateProfile = new _UpdateProfileService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to update profile of the user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Tiago Mariano',
      email: 'tgmariano@gmail.com'
    });
    expect(updatedUser.name).toBe('Tiago Mariano');
    expect(updatedUser.email).toBe('tgmariano@gmail.com');
  });
  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@sample.com',
      password: '123456'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Tiago Mariano',
      email: 'tgmariano@gmail.com',
      old_password: '123456',
      password: '123123'
    });
    expect(updatedUser.password).toBe('123123');
  });
  it('should not be able to update the password without inform the old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Tiago Mariano',
      email: 'tgmariano@gmail.com',
      // old passwd is not informed
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'Tiago Mariano',
      email: 'tgmariano@gmail.com',
      old_password: 'xx-wrong-password-xx',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update profile from non-existing user', async () => {
    await expect(updateProfile.execute({
      user_id: 'non_existing_user_id_',
      name: 'Tiago Mariano',
      email: 'tgmariano@gmail.com',
      old_password: 'xx-wrong-password-xx',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});