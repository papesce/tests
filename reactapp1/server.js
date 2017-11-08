import React from 'react'
import express from  'express';
import Menu from './components/Menu';
import { renderToString } from 'react-dom/server';

global.React = React;

const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};

const html = renderToString(<Menu recipes = {[]}/>);

const sendHtmlPage = (req, res) => 
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>React Recipes App</title>
        </head>
        <body>
            <div id="react-container">${html}</div>
        </body>
    </html>
        `);



//const sayHello = (req, res) => 
//  res.status(200).send('<h1>Hello World</h1>');

const app = express()
  .use(logger)
  .use(sendHtmlPage);

app.listen(3000, () =>
  console.log('Recipe app running at http://localhost:3000')
);