
import express from 'express';

import Article from '../controllers/article';

const { addArticle, getArticles } = Article;

const router = express.Router();

// Create a meetup record
router.post('/', addArticle);

// Fetch all meetups records.
router.get('/', getArticles);

export default router;
