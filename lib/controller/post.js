'use strict';
var postService = require('../services/postService');

const rstring = function() { return Math.floor(Math.random()*1e6).toString(); }

module.exports = {
    // Here we're going to include our functions that will handle each request in the routes.js file.
    create: (request, h) => {
        // Removed try catch. Already handling error in server.js
        var data = request.payload;
        let response = postService.create(data);
        // response.then((rs) => {console.log(rs)});
        return response
    },
    get: (request, h) => {
        // Removed try catch. Already handling error in server.js
        var data = request.params;
        let post = postService.get(data.postId);
        // response.then((rs) => {console.log(rs)});
        return post
    }
};