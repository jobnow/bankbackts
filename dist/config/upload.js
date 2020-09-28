"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tempFolder = _path.default.resolve(__dirname, '..', '..', 'temp');

var _default = {
  driver: process.env.STORAGE_DRIVER,
  tempFolder,
  uploadsFolder: _path.default.resolve(tempFolder, 'uploads'),
  multer: {
    storage: _multer.default.diskStorage({
      destination: tempFolder,

      filename(request, file, callback) {
        const fileHash = _crypto.default.randomBytes(10).toString('ascii');

        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      }

    })
  },
  config: {
    disk: {},
    aws: {
      bucket: 'www.app.bankpague.com'
    }
  }
};
exports.default = _default;