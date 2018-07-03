'use strict';
var util = require('util');
const _ = require('lodash');
var posts = require('../temp/posts')

module.exports = {
    init: () => {
        
        // Here you can do anykind of init work
        console.log('stating service')
    },
    create: (request) => {
        return new Promise((resolve, reject) => {
            
            // Validate data here and
            // Reject promise if data is invalid or resolve the promise
            console.log('Creating Post')
            
            // Faking  processing time
            setTimeout(() => {                
                console.log('Post Created')
            }, 1000);


            resolve({'success': true, 'message': 'Requested Data'})
        });
    },
    get: (postId) => {
        return new Promise((resolve, reject) => {
            // Validate data here and
            // Reject promise if data is invalid or resolve the promise
            let post = null;
            // Faking  processing time
            setTimeout(() => {
                post = _.find(posts, ['id', _.toInteger(postId)]);
                if(_.isNull(post)) {
                    throw new Error({'success': false})
                }
                resolve({'success': true, 'data': post})
            }, 2000);           
        });
    }

};