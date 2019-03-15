import express from 'express';
import commentController from '../controllers/comment';

const router = express.Router();

// Comments routes
router.post('/', commentController.postComment);
router.get('/:id', commentController.findCommentById);
router.get('/', commentController.getAllComments);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

export default router;
