import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { basename } from '../shared/history';
import routes from '../shared/routes';

const html = ({ markup }) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <div id="app">${markup}</div>
    </body>
    </html>
`;

export default (event, callback) => {
    const location = event.path || '/';
    match({ routes, location, basename }, (err, redirectLocation, props) => {
        if (err) {
            console.log('match.err:', err);
            callback(500, {}, '500: Internal server error');
        }
        else if (redirectLocation) {
            callback(302, { Location: redirectLocation.pathname + redirectLocation.search });
        }
        else if (props) {
            const markup = renderToString(<RouterContext {...props} />);
            callback(200, { 'Content-Type': 'text/html' }, html({
                markup
            }));
        }
        else {
            callback(404, {}, 'Page not found');
        }
    });
};

