'use strict';

import server from './src/server';

exports.handler = (event, context, callback) => {
    server(event, (statusCode, headers, body) => {
        const response = {
            statusCode,
            headers,
            body
        };
        callback(null, response);
    });
};

