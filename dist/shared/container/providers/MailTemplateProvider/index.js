"use strict";

var _tsyringe = require("tsyringe");

var _HbsMailTemplateProvider = _interopRequireDefault(require("./implementations/HbsMailTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  handlebars: _HbsMailTemplateProvider.default
};

_tsyringe.container.registerSingleton('MailTemplateProvider', providers.handlebars);