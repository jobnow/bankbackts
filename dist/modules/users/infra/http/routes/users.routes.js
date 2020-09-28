"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

var _celebrate = require("celebrate");

var _typeorm = require("typeorm");

var _UsersRepository = _interopRequireDefault(require("../../../repositories/UsersRepository"));

var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));

var _UserAvatarController = _interopRequireDefault(require("../controllers/UserAvatarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default.multer);
const usersController = new _UsersController.default();
const userAvatarController = new _UserAvatarController.default();
usersRouter.get('/', async (request, response) => {
  const usersRepository = (0, _typeorm.getCustomRepository)(_UsersRepository.default);
  const appointments = await usersRepository.find();
  return response.json(appointments);
});
usersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), usersController.create);
usersRouter.patch('/avatar', _ensureAuthenticated.default, upload.single('avatar'), userAvatarController.update);
var _default = usersRouter;
exports.default = _default;