import { Request, Response, NextFunction } from 'express';

type functionType = (req: Request, res: Response, next: NextFunction) => Promise<any>;

/**
 * express request async function wrapper
 */
export default (fn: functionType) => {
    return (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);
};