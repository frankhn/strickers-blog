import joi from 'joi';
import commentModal from '../models/comment';
import validations from './validations/formValidations';

class Comment {
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  static findCommentById(req, res) {
    const { id } = req.params;
    const { error } = joi.validate({
      id,
    }, validations.getChema);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      commentModal.findAll({
        where: {
          id,
        },
      }).then((comment) => {
        if (comment.length === 0) {
          res.status(404).json({
            message: 'No comment found with the specified id',
          });
        } else {
          res.status(200).json({
            status: '200',
            data: comment,
          });
        }
      }).catch((err) => {
        res.status(500).send(err);
      });
    }
  }
}

export default Comment;
