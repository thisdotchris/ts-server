import { Application } from 'express'

import hello from './controllers/hello';

export default (app: Application) => {
    
    app.use('/', hello);

}