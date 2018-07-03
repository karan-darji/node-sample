'use strict';

const post = require('./controller/post')

module.exports = [
    // We're going to define our routes here
    {
        //this route is something you can run on browser to check for the authentication
        method: 'GET',
        path: '/',
        options: {
            description: "Sample route to test out the server"
        },
        handler: function (request, h) {
            // Testing out the server
            return 'welcome';
        }
    },
    {
        // Dummy route which creates a post
        method: 'POST',
        path: '/post/create',
        handler: post.create,
        options:{
            auth: 'simple', // for authentication.
            description: "Crate a post"
        }
    },
    {
        // Dummy route which gets data from the post
        method: 'GET',
        path: '/post/{postId}',
        handler: post.get,
        options:{
            auth: 'simple', // for authentication.
            description: "Crate a post"
        }
    },
];