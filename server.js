'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./lib/settings');
const routes = require('./lib/routes');

// For authentication. Excluded for now
const users = require('./lib/temp/users'); // Temporary user for testing authentication
const validate = require('./lib/authentication')

const start = async () => {
    try {
        const server = new Hapi.Server({ port: Settings.port, host: Settings.host });
        // Basic authentication. Excluded for now.
        await server.register(require('hapi-auth-basic'));
        server.auth.strategy('simple', 'basic', { validate });
        
        //setup routes
        server.route(routes);
        //setup node server
        await server.start();

        console.log('server running at: ' + server.info.uri);
    }
    catch (err) {
        Hoek.assert(!err, err);
    }
};
start();