import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import debug, { Debugger } from 'debug';
const appDebug: Debugger = debug('app');

import { app, server } from './server';
import './src/routes';
import errorHandler from './src/middlewares/errorHandler';
app.use(errorHandler);

server.on('error', error => appDebug(`server error: ${error.message}`));
server.on('listening', () => appDebug(`server running on port ${process.env.PORT}`));
server.listen(process.env.PORT);