import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import indexRouter from './routes'
import router from './routes';

const app = express();

app.use('/', router);

const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

export {httpServer, io}