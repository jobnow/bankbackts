"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    driver: process.env.MAIL_DRIVER || 'ethereal',
    defaults: {
        from: {
            email: 'ihenrits@gmail.com',
            name: 'Henrique Tavares',
        },
    },
};
