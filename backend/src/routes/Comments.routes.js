import { Router } from 'express';
import { AddComments, RetriewComments } from '../controllers/comments.js'; // Adjust the import path as per your file structure

const router = Router();

router.post('/comments', AddComments);
router.get('/:movieName/comments', RetriewComments);

export default router;
