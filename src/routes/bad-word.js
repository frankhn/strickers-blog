import express from 'express';
import BadWord from '../controllers/bad-word';

const router = express.Router();

router.get('/', BadWord.getWords);
router.put('/:id', BadWord.updateWord);
router.delete('/:id', BadWord.deleteWord);
router.post('/new-word', BadWord.create);

export default router;
