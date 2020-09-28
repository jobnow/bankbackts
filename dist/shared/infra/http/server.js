"use strict";

require("reflect-metadata");

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

require("../typeorm");

require("../../container");

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _rateLimiter = _interopRequireDefault(require("./middlewares/rateLimiter"));

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _celebrate = require("celebrate");

var _routes = _interopRequireDefault(require("./routes"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_rateLimiter.default);
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use('/files', _express.default.static(_upload.default.uploadsFolder));
app.use(_routes.default);
app.use((0, _celebrate.errors)());
app.use('/uploads', _express.default.static(_path.default.resolve(__dirname, '..', '..', '..', '..', 'temp')));
app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  } // eslint-disable-next-line no-console


  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333!');
});