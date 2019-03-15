import express from 'express';
import article from './article';
import badword from './badword';

const router = express();


router.use('/article', article);

module.exports = router;
