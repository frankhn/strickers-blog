import express from 'express';
import article from './article';
import signup from '../controllers/signup';

const router = express();


router.use('/article', article);


router.post('/auth/signup', signup);

module.exports = router;
