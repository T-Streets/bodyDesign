const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

/**
 * Points static path to dist
 */
app.use(express.static(path.join(__dirname, '..', 'dist')));

const routes = require('../routes');
app.use('/', routes);

/**
 * Gets port from environment and stores in express
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Creates http server
 */
const server = http.createServer(app);
server.listen(port, () => {console.log(`listening on port ${port}`)})
