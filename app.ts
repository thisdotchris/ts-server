import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import { app, server } from './server';
import routes from './src/routes';

import debug, { Debugger } from 'debug';
const appDebug: Debugger = debug('app');

routes(app);

server.on('error', error => appDebug(`server error: ${error.message}`));
server.on('listening', () => appDebug(`server running on port ${process.env.PORT}`));

server.listen(process.env.PORT);