import { Request, Response, NextFunction } from 'express';
import debug, { Debugger } from 'debug';

const errorHandlerDebug: Debugger = debug('middleware:error-handler');

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        errorHandlerDebug(err.message || err);
        res.status(500);
        res.json({ message: 'internal server error.' });
    } else {
        next();
    }
}