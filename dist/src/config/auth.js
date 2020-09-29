"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwt: {
        secret: process.env.APP_SECRET || 'default_secret',
        expiresIn: process.env.APP_EXPIRES || '1d',
    },
};
