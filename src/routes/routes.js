import express from 'express';
import signup from '../controllers/signup'

const router = express.Router();


router.post('/auth/signup', signup);

module.exports = router;
