
import express from 'express';
import category from '../controllers/category';

const router = express.Router();

router.get('/', category.getAllCategory)

router.get('/:id', category.getCategory)
router.post('/', category.createCategory)

router.delete('/:id', category.deleteCategory)

router.put('/:id', category.UpdateCategory)



module.exports = router;
