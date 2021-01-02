import { app } from '../server';
import hello from './controllers/hello';

app.use('/', hello);