'use strict';
const Bcrypt = require('bcrypt');
const users =  require('./temp/users');

module.exports = async (request, username, password) => {
    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }
    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };
    return { isValid, credentials };
};