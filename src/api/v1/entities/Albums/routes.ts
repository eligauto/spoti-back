import { Router } from 'express';
import { getAllAlbumsController } from './controllers';
const router = Router();

router.get('/search', getAllAlbumsController);

export default router;