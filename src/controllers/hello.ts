import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'server running...' });
});

router.post('/test', (req: Request, res: Response) => {
    res.status(200).json({ message: 'test' });
});

export default router;