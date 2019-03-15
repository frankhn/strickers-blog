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

  static getAllComments(req, res) {
    commentModal.findAll()
      .then((comments) => {
        if (comments.length === 0) {
          res.status(404).json({
            message: 'No comment found',
          });
        } else {
          res.status(200).json({
            status: '200',
            data: comments,
          });
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  static postComment(req, res) {
    const { comment, article, user } = req.body;

    const { error } = joi.validate({
      comment, article, user,
    }, validations.createComment);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      commentModal.create({
        comment,
        articleid: article,
        userid: user,
      })
        .then((formData) => {
          res.status(201).json({
            message: 'Comment posted',
            data: formData,
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
  }

  static updateComment(req, res) {
    const { id } = req.params;
    const { comment, articleid, userid } = req.body;
    const { error } = joi.validate({
      id, comment,
    }, validations.updateSchema);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      commentModal.update({ comment, articleid, userid }, { returning: true, where: { id } })
        .then((updatedcomment) => {
          res.status(202).json({
            data: updatedcomment,
          });
        }).catch((err) => {
          res.status(500).send(err);
        });
    }
  }

  static deleteComment(req, res) {
    const { id } = req.params;
    const { error } = joi.validate({
      id,
    }, validations.getChema);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      commentModal.destroy({
        where: {
          id,
        },
      })
        .then((deletedComment) => {
          res.status(202).json({
            message: 'Comment deleted',
            data: deletedComment,
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
  }
}


export default Comment;
